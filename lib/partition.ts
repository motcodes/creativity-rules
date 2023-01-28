export const partition = (arr: Array<unknown>, n: number) => {
  const size = Math.ceil(arr.length / n)
  return Array.from({ length: n }, (v, i) =>
    arr.slice(i * size, i * size + size)
  )
}
