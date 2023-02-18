import { ComponentIcon } from '@sanity/icons'
import { type StructureResolver } from 'sanity/desk'

import { pageStructurePages, sharedComponentsStructurePages } from 'schemas'

export const singletonPlugin = (types: string[]) => {
  return {
    name: 'singletonPlugin',
    document: {
      // Hide 'Singletons (such as Home)' from new document options
      // https://user-images.githubusercontent.com/81981/195728798-e0c6cf7e-d442-4e58-af3a-8cd99d7fcc28.png
      newDocumentOptions: (prev, { creationContext }) => {
        if (creationContext.type === 'global') {
          return prev.filter(
            templateItem => !types.includes(templateItem.templateId)
          )
        }

        return prev
      },
      // Removes the "duplicate" action on the Singletons (such as Home)
      actions: (prev, { schemaType }) => {
        if (types.includes(schemaType)) {
          return prev.filter(({ action }) => action !== 'duplicate')
        }

        return prev
      },
    },
  }
}

// The StructureResolver is how we're changing the DeskTool structure to linking to document (named Singleton)
// like how "Home" is handled.
export const pageStructure = (): // typeDefArray: DocumentDefinition[]
StructureResolver => {
  const typeDefArray = pageStructurePages
  return S => {
    // Goes through all of the singletons that were provided and translates them into something the
    // Desktool can understand
    const singletonItems = showSingletonEditor(typeDefArray, S)
    const sharedComponentsListItems = showSingletonEditor(
      sharedComponentsStructurePages,
      S
    )

    // The default root list items (except custom ones)
    const defaultListItems = S.documentTypeListItems().filter(
      listItem =>
        ![...typeDefArray, ...sharedComponentsStructurePages].find(
          item => item.name === listItem.getId()
        )
    )

    return S.list()
      .id('list')
      .title('Singelton Pages')
      .items([
        ...singletonItems,
        S.divider(),
        ...defaultListItems,
        S.divider(),
        S.listItem()
          .title('Shared Components')
          .id('shared')
          .icon(ComponentIcon)
          .child(
            S.list()
              .title('Shared Components')
              .id('shared-list')
              .items([...sharedComponentsListItems])
          ),
      ])
  }
}

const showSingletonEditor = (arr, S) =>
  arr.map(typeDef =>
    S.listItem()
      .title(typeDef.title)
      .icon(typeDef.icon)
      .child(
        S.editor()
          .id(typeDef.name)
          .schemaType(typeDef.name)
          .documentId(typeDef.name)
          .views([S.view.form()])
      )
  )
