'use client'

export function Stage({ stream }) {
  return (
    <div className="aspect-video w-full h-full">
      <iframe
        allow="autoplay; picture-in-picture"
        allowFullScreen
        frameBorder="0"
        src={`${stream}?controls=1&autoplay=1&mute=1`}
        width="100%"
        height="100%"
      />
    </div>
  )
}
