import { store } from "@/store"
import {
  getDepartmentsList,
  getDepartmentBySlug,
} from "@/store/api/DepartmentsApi"
import {
  setDepartmentPage,
  setStartupDepartmentsList,
} from "@/store/slice/DepartmentsSlice"
import Intro from "@/components/Departments/Intro"
import Departments from "@/components/Departments/Departments"
import Loader from "@/components/Loader/Loader"
// import DATA from "@/data/departmentGroups"

export const revalidate = 60

export default async function DepartmentsPage() {
  // const DATA = [
  //   {
  //     name: "Sales",
  //     links: [
  //       {
  //         name: "Sales Team",
  //         url: "#",
  //         desc: "EXANTE makes inroads into new markets and makes the utmost of our traditional outposts. Our sales team spans Europe, CIS and Asia and actively recruits Account Managers in 15+ markets.",
  //       },
  //       {
  //         name: "Sales Administration",
  //         url: "#",
  //         desc: "This team provides consultancy in complex cases, trains newcomers, reviews existing policies, and helps boost performance for each account manager.",
  //       },
  //     ],
  //   },
  //   {
  //     name: "Business Operation",
  //     links: [
  //       {
  //         name: "Compliance & Onboarding",
  //         url: "#",
  //         desc: "The division is responsible for the regulatory security of both clients and EXANTE. They know everything about the ever-changing regulatory requirements and the clients’ pains. They also control the onboarding process that helps turn registrants into accounts under corresponding legal entities.",
  //         responsible: {
  //           url: "maito:aterenkoax@exante.eu",
  //           name: "aterenkoax@exante.eu",
  //         },
  //       },
  //       {
  //         name: "Help Desk",
  //         url: "#",
  //         desc: "Fast and reliable 24/7 support is at your fingertips.<br>Email <a href='mailto:support@exante.eu'>support@exante.eu</a> and you’ll receive a reply<br>within just three minutes. Our help desk is the first communication link between our internal departments and ourselves.",
  //       },
  //       {
  //         name: "Middle Office",
  //         url: "#",
  //         desc: "Middle Office is a team of trading experts who support client operations. They create special setups for accounts, do voice trades and manual order execution and assign permissions for different account types.",
  //       },
  //       {
  //         name: "Back Office",
  //         url: "#",
  //         desc: "The EXANTE Back Office experts support the back end of the platform and client accounts, taking care of multiple operations, such as transfer of securities, dividends and rebates, contract settlement, corporate asset transactions, and more.",
  //       },
  //       {
  //         name: "Risk Team",
  //         url: "#",
  //         desc: "The Risk team evaluates clients' risks and minimises the possibility of losses. This is a daunting task, given that we service 13,000 clients with multiple accounts to keep an eye on.",
  //       },
  //       {
  //         name: "Finance Control",
  //         url: "#",
  //         desc: "Finance is at the forefront of everything we do. Our colleagues in Finance Control check the clients’ financial operations to ensure their integrity",
  //       },
  //     ],
  //   },
  //   {
  //     name: "Developers & IT Support",
  //     links: [
  //       {
  //         name: "Gateways",
  //         url: "#",
  //         desc: "The Gateways team ensures connectivity and live data feeds for our clients, wherever they are and whatever API they employ.",
  //       },
  //       {
  //         name: "Core",
  //         url: "#",
  //         desc: "The Core team takes care of the very essence<br>of the EXANTE platform – the fast trading<br>engine.",
  //       },
  //       {
  //         name: "QA",
  //         url: "#",
  //         desc: "Quality Assurance is vital, especially in a high-load environment that involves thousands of orders. The team makes sure tests go smoothly and the system is stable at all times.",
  //       },
  //       {
  //         name: "Mobile Platforms",
  //         url: "#",
  //         desc: "Our native iOS and Android apps enable investors<br>to trade on the go. Learn what’s up in the Mobile<br>department.",
  //       },
  //       {
  //         name: "Platform Guides",
  //         url: "#",
  //         desc: "For a more comprehensive overview of the EXANTE platforms, please refer to our <a href='https://support.exante.eu/hc/en-us/categories/360001828272-USER-MANUAL' target='_blank'>Help Centre</a>. You can also watch educational videos on our trading platform at <a href='https://exante.eu.crossknowledge.com/site/channel/96?origin=sso' target='_blank'>CrossKnowledge</a>.",
  //       },
  //       {
  //         name: "Platforms",
  //         url: "#",
  //         desc: "The team caters for our flagship solution for professional traders, with its clear modules and a wealth of features to tweak and tune. Contact the team for feature requests, release procedures and how-to articles.",
  //       },
  //       {
  //         name: "Technical Support & OPS",
  //         url: "#",
  //         desc: "The most professional distributed IT team in the world, they help customers resolve their issues and monitor the EXANTE platform performance 24/7/365. They add new instruments, establish FIX connections, keep the gates open and quotes rolling. The OPS team helps their colleagues to set up personal working spaces and ensure their utmost performance.",
  //       },
  //       {
  //         name: "Developers & DevQA",
  //         url: "#",
  //         desc: "A team of IT gurus who make sure that the EXANTE desktop, web and mobile editions are on the cutting edge of technology and meet the evolving market needs. They are committed to product quality and its competitive standing.",
  //       },
  //     ],
  //   },
  //   {
  //     name: "Centralised Functions",
  //     links: [
  //       {
  //         name: "Marketing",
  //         url: "#",
  //         desc: "EXANTE makes inroads into new markets and holds our traditional outposts. Our Sales team operates in Europe, the Middle East, CIS, Asia and Latin America and actively recruits account managers in 30+ countries.",
  //       },
  //       {
  //         name: "HR Team",
  //         url: "/departments/hr",
  //         desc: "EXANTE makes inroads into new markets and holds our traditional outposts. Our Sales team operates in Europe, the Middle East, CIS, Asia and Latin America and actively recruits account managers in 30+ countries.",
  //       },
  //       {
  //         name: "Travel & Admin",
  //         url: "#",
  //         desc: "EXANTE makes inroads into new markets and holds our traditional outposts. Our Sales team operates in Europe, the Middle East, CIS, Asia and Latin America and actively recruits account managers in 30+ countries.",
  //       },
  //     ],
  //   },
  // ]

  let departmentsListResult = { isLoading: true }
  let items = false

  departmentsListResult = await store.dispatch(
    // { isLoading, isFetching, data, error }
    getDepartmentsList.initiate({ limit: 500 })
  )
  if (departmentsListResult.data) {
    store.dispatch(setStartupDepartmentsList(departmentsListResult.data))
  }
  items = store.getState().DepartmentsSlice.startupDepartments.items
  function createTree(pages) {
    const tree = {}

    pages.forEach((page) => {
      const urlParts = new URL(page.meta.html_url).pathname
        .split("/")
        .filter((part) => part !== "") // Разбиваем URL на части
      let currentNode = tree

      urlParts.forEach((part, index) => {
        if (!currentNode.children) {
          currentNode.children = {}
        }

        if (!currentNode.children[part]) {
          currentNode.children[part] = {}
        }

        if (index === urlParts.length - 1) {
          currentNode.children[part] = {
            ...page,
            children: currentNode.children[part].children
              ? currentNode.children[part].children
              : {},
          }
        } else {
          currentNode = currentNode.children[part]
        }
      })
    })

    // return Object.values(tree.children)
    return tree
  }

  const itemsTree = createTree(items)

  return (
    <>
      {/* {departmentsPage && <Intro department={departmentsPage} items={items} />} */}
      {departmentsListResult.isLoading || departmentsListResult.isFetching ? (
        <Loader width={50} height={50} />
      ) : departmentsListResult.error ? (
        console.error(departmentsListResult.error)
      ) : items ? (
        <Departments items={itemsTree}></Departments>
      ) : null}
    </>
  )
}
