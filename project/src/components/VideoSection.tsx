import React from 'react';

export function VideoSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">
          Conoce Nuestra Universidad
        </h2>
        <div className="max-w-4xl mx-auto aspect-w-16 aspect-h-9">
          <div className="relative w-full h-0 pb-[56.25%]">
            <iframe
              src="https://www.youtube.com/embed/uAe0yfvhDuQ"
              title="Video institucional UTC"
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}