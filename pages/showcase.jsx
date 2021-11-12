import HeadMetadata from '../components/HeadMetadata'
import Navbar from '../components/Navbar/Navbar'
import HeaderLarge from '../components/HeaderLarge'
import ProjectCarousel from '../components/ProjectsPage/Projects/ProjectCarousel'
import ProjectCarouselSlideIdeoxan from '../components/ProjectsPage/Projects/ProjectCarouselSlideIdeoxan'
import ProjectCarouselSlideSerenade from '../components/ProjectsPage/Projects/ProjectCarouselSlideSerenade'
import ProjectCarouselSlideSCDL from '../components/ProjectsPage/Projects/ProjectCarouselSlideSCDL'
import ProjectCarouselSlideSkosh from '../components/ProjectsPage/Projects/ProjectCarouselSlideSkosh'
import CallToAction from '../components/CallToAction'
import Footer from '../components/Footer'
import ArtSection from '../components/ProjectsPage/Art/Art'

export default function Showcase() {
    let projectsData = [
        {
            name: "Ideoxan",
            objects: {
                Component: ProjectCarouselSlideIdeoxan
            }
        },
        {
            name: "Serenade",
            objects: {
                Component: ProjectCarouselSlideSerenade
            }
        },
        {
            name: "SCDL",
            objects: {
                Component: ProjectCarouselSlideSCDL
            }
        },
        {
            name: "Skosh",
            objects: {
                Component: ProjectCarouselSlideSkosh
            }
        },
    ]
    return (
        <>
            <HeadMetadata pageTitle="Showcase"/>
            <body className="h-screen w-screen bg-gray-50 overflow-x-hidden">
                <Navbar/>
                <HeaderLarge headerName="Showcase" colorFrom="orange-400" colorTo="yellow-400"/>
                <ProjectCarousel data={projectsData}/>
                <CallToAction data={{
                    title: 'Something Missing?',
                    description: 'Check out more of my projects and open source contributions on my GitHub profile.',
                    buttons: [
                        {
                            text: 'View Profile',
                            icon: 'GitHub',
                            url: 'https://github.com/skyclo'
                        },
                    ]
                }}/>
                <ArtSection/>
                <Footer/>
            </body>
        </>
    )
}
