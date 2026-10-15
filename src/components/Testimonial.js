"use client";

export default function Testimonial({ quote, author, role }) {
  return (
    <figure className="testimonial">
      <blockquote>“{quote}”</blockquote>
      <figcaption>
        <strong>{author}</strong>
        <span>{role}</span>
      </figcaption>
    </figure>
  );
}
