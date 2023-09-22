import { People } from "@/types/BambooHR"
import styles from "./Person.module.scss"
import {
  checkPersonIsBirthday,
  checkPersonIsAnniversary,
  yearSuffix,
  formatDateToDatAndMonth,
} from "@/services/Persons"
import PersonImage from "@/components/Person/Image"
import BirthdayCake from "@/components/BirthdayCake/BirthdayCake"
import { slugify } from "@/utils/slugify"
import Link from "next/link"

export default function managerPerson({
  item,
  className = "",
  withHover = false,
  manager = false,
  occasionDate = new Date(),
  horizontal,
  horizontalSecond,
  hideBirthdayIcon = false,
}: {
  item: People
  className?: string
  withHover?: Boolean
  manager?: Boolean
  occasionDate?: Date
  horizontal?: Boolean
  horizontalSecond?: Boolean
  hideBirthdayIcon?: Boolean
}) {
  // const router = useRouter()
  if (!item) {
    return <></>
  }

  let occasion = ""
  let icon = ""
  let anniversaryYears = 0

  const today = new Date()
  const isOccasionDateIsToday =
    today.getFullYear() == occasionDate.getFullYear() &&
    today.getMonth() == occasionDate.getMonth() &&
    today.getDate() == occasionDate.getDate()
  const isBirthday = checkPersonIsBirthday(item, occasionDate)
  const isAnniversary = checkPersonIsAnniversary(item, occasionDate)

  if (isAnniversary) {
    occasion = "Anniversary"
    icon = "anniversary.svg"

    const hireDate = new Date(item.hireDate)
    anniversaryYears = occasionDate.getFullYear() - hireDate.getFullYear()
  } else if (isBirthday) {
    occasion = "Happy Birthday!"
    icon = "birthday.svg"
  }

  // const onClick = () => {
  //   // normally, should push to the person page
  //   if (withHover) {
  //     router.push("#")
  //   }
  // }

  const ItemContent = () => (
    <object type="person/ItemContent" className={styles.person__content}>
      <div className={styles.person__image}>
        <PersonImage person={item} />
        {!hideBirthdayIcon && checkPersonIsBirthday(item) && (
          <BirthdayCake
            className={styles.person__bdicon}
            width={30}
            height={30}
          ></BirthdayCake>
        )}
        {horizontal && (
          <strong
            className={styles.person__name}
          >{`${item.firstName} ${item.lastName}`}</strong>
        )}
        {horizontalSecond && (
          <div className={styles.person__title}>
            <strong
              className={styles.person__name}
            >{`${item.firstName} ${item.lastName}`}</strong>
            <div className={styles.person__meta}>{item.jobTitle}</div>
          </div>
        )}
      </div>
      <div className={styles.person__text}>
        {(isAnniversary || isBirthday) &&
          (!withHover || !isOccasionDateIsToday) && (
            <div className={styles.person__meta}>{`${formatDateToDatAndMonth(
              !isOccasionDateIsToday ? occasionDate : today
            )} - ${occasion}`}</div>
          )}
        {isBirthday && withHover && (
          <div className={styles.person__occasion}>Happy birthday!</div>
        )}
        {isAnniversary && withHover && (
          <div className={styles.person__occasion}>
            {anniversaryYears}
            {yearSuffix(anniversaryYears)} Anniversary!
          </div>
        )}
        {!horizontal && !horizontalSecond && (
          <strong
            className={styles.person__name}
          >{`${item.firstName} ${item.lastName}`}</strong>
        )}

        {!horizontalSecond && (
          <div className={styles.person__meta}>
            {manager ? "" : item.jobTitle}
            {item.department && !manager ? (
              <>
                <br></br> {item.department}
              </>
            ) : item.department ? (
              <>{item.department}</>
            ) : null}
            {item.division &&
              item.department != item.division &&
              ` · ${item.division}`}

            {!isAnniversary && !isBirthday && (
              <>
                <br></br>
                {item.location}
              </>
            )}
          </div>
        )}

        {/* {item.links && (
          <ul className={styles.person__links}>
            {item.links.map((link, linkIndex) => {
              return (
                <li key={linkIndex}>
                  {link.url ? <a href={link.url}>{link.name}</a> : link.name}
                </li>
              )
            })}
          </ul>
        )} */}
        {manager && (
          <ul className={styles.person__links}>
            {item.workEmail && (
              <li>
                <a href={`mailto:${item.workEmail}`}>{item.workEmail}</a>
              </li>
            )}
            {item.workPhone ? (
              <li>
                <a href={`tel:${item.workPhone.replaceAll(" ", "")}`}>
                  {item.workPhone}
                </a>
                {item.workPhoneExtension && ` (${item.workPhoneExtension})`}
              </li>
            ) : (
              item.mobilePhone && (
                <li>
                  <a href={`tel:${item.mobilePhone.replaceAll(" ", "")}`}>
                    {item.mobilePhone}
                  </a>
                </li>
              )
            )}
            {item.workEmail && (
              <li>
                <a
                  href={`https://${
                    process.env.NEXT_PUBLIC_SLACK_DOMAIN
                  }.slack.com/team/${item.workEmail.split("@")[0]}`}
                  target="_blank"
                >{`@${item.workEmail.split("@")[0]}`}</a>
              </li>
            )}
          </ul>
        )}
      </div>
      {isAnniversary && (
        <div className={`${styles.person__icon} ${styles.anniversary}`}>
          <svg
            width="36"
            height="34"
            viewBox="0 0 36 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 1L23.2533 11.5337L35 13.2229L26.5 21.4223L28.5066 33L18 27.5337L7.49342 33L9.5 21.4223L1 13.2229L12.7467 11.5337L18 1Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeMiterlimit="3.8637"
              strokeLinejoin="round"
            />
          </svg>
          <span>{anniversaryYears}</span>
        </div>
      )}
      {isBirthday && (
        <div className={`${styles.person__icon} ${styles.birthday}`}>
          <svg
            width="35"
            height="34"
            viewBox="0 0 35 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path
                d="M1 33H33.8"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M22.5984 7.42387V14.6001H19.3984V7.42387C19.3984 6.96897 19.7253 6.6001 20.1283 6.6001H21.8685C22.2715 6.6001 22.5984 6.969 22.5984 7.42387Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M22.5984 3.55684C22.5984 4.35419 21.8824 5 20.9984 5C20.1145 5 19.3984 4.35417 19.3984 3.55684C19.3984 2.75952 20.9984 1 20.9984 1C20.998 1 22.5984 2.75957 22.5984 3.55684Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M21 5V6.6"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15.4031 7.42387V14.6001H12.2031V7.42387C12.2031 6.96897 12.53 6.6001 12.933 6.6001H14.6732C15.0766 6.6001 15.4031 6.969 15.4031 7.42387Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15.4031 3.55684C15.4031 4.35419 14.6871 5 13.8031 5C12.9191 5 12.2031 4.35417 12.2031 3.55684C12.2031 2.75952 13.8031 1 13.8031 1C13.8031 1 15.4031 2.75957 15.4031 3.55684Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.7969 5V6.6"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M28.3242 22.6001H6.48188C5.22327 22.6001 4.20312 23.6707 4.20312 24.9909V27.5934C4.74964 27.3863 5.29575 27.2047 5.84229 27.2047C7.12669 27.2047 8.4115 28.2001 9.6959 28.2001C10.9803 28.2001 12.2651 27.2047 13.5495 27.2047C14.8339 27.2047 16.1187 28.2001 17.4031 28.2001C18.6875 28.2001 19.9723 27.2047 21.2567 27.2047C22.5411 27.2047 23.8259 28.2001 25.1103 28.2001C26.3948 28.2001 27.6796 27.2047 28.964 27.2047C29.5105 27.2047 30.0566 27.3863 30.6031 27.5934V24.9909C30.6028 23.6704 29.5827 22.6001 28.324 22.6001H28.3242Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M25.1108 27.5945C23.8263 27.5945 22.5415 26.6001 21.2571 26.6001C19.9727 26.6001 18.6878 27.5945 17.4034 27.5945C16.119 27.5945 14.8341 26.6001 13.5497 26.6001C12.2653 26.6001 10.9804 27.5945 9.69601 27.5945C8.41158 27.5945 7.12675 26.6001 5.84232 26.6001C5.2958 26.6001 4.74968 26.7815 4.20312 26.9884V33.0001H30.6031V26.9884C30.0566 26.7815 29.5105 26.6001 28.9639 26.6001C27.6798 26.6001 26.3954 27.5945 25.1106 27.5945H25.1108Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.427 17.6506C14.7507 17.6506 16.0748 18.5997 17.3985 18.5997C18.7222 18.5997 20.0463 17.6506 21.37 17.6506C22.6937 17.6506 24.0179 18.5997 25.3416 18.5997C26.0273 18.5997 26.713 18.3454 27.3984 18.1001V16.8787C27.3984 15.6188 26.349 14.6001 25.0511 14.6001L9.74575 14.6005C8.44786 14.6005 7.39844 15.6192 7.39844 16.8791V18.1005C8.08418 18.3458 8.7695 18.6001 9.45531 18.6001C10.7794 18.6001 12.1035 17.6505 13.4272 17.6505L13.427 17.6506Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M27.3984 22.5998V18.2579C26.7127 18.5079 26.0269 18.767 25.3415 18.767C24.0178 18.767 22.6937 17.7998 21.37 17.7998C20.0463 17.7998 18.7222 18.767 17.3984 18.767C16.0747 18.767 14.7506 17.7998 13.4269 17.7998C12.1032 17.7998 10.779 18.767 9.45532 18.767C8.76958 18.767 8.08425 18.5079 7.39844 18.2579V22.5998H27.3984Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </svg>
        </div>
      )}
      {/* {(item.anniversary || item.birthday) && (
        <div className={styles.person__icon}>
          <img src={`/images/icons/${icon}`} alt={icon} />
          {item.anniversary && <span>{item.anniversary}</span>}
        </div>
      )} */}
    </object>
  )

  function getUrl(el: People = item) {
    if (!el.url && !el.workEmail) return "#"
    return `/people/${
      el.url ? el.url : slugify(`${el.workEmail.split("@")[0]}`)
    }/`
  }

  return (
    <li
      className={`${styles.person} ${withHover ? styles.withHover : ""} ${
        manager ? styles.manager : ""
      } ${className ? className : ""} ${horizontal ? styles.horizontal : ""} ${
        horizontalSecond ? styles.horizontalSecond : ""
      }`}
      // onClick={onClick}
    >
      <Link className={`${styles.person__wrap}`} href={getUrl(item)}>
        <ItemContent></ItemContent>
      </Link>
    </li>
  )
}
