import { People } from "@/types/BambooHR"

export default function PersonImage({
  person,
  className,
}: {
  person: People
  className?: string
}) {
  return (
    <img
      loading="lazy"
      className={`${className ? className : ""}`}
      src={
        person.photoUrl
          ? person.photoUrl
          : "/images/persons/default_person_image.png"
      }
      alt={person.photoUrl ? `${person.firstName} ${person.lastName}` : ""}
    />
  )
}
