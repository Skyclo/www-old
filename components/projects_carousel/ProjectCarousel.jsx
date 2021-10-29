import { useEffect, useState } from "react"


export default function ProjectCarousel({ data }) {
    const [slide, setSlide] = useState(0)

    let defaultSlideNavStyle = 'slide-selector h-2 rounded-full bg-gray-950 cursor-pointer'
    let defaultSlideStyle = "project-carousel overflow-hidden relative flex flex-row flex-shrink-0 w-full xl:w-3/4 2xl:w-1/2 h-full mr-12 bg-gray-950 rounded-2xl shadow-xl ring-1 ring-gray-500 ring-opacity-20"

    useEffect(() => {
        let slides = document.getElementsByClassName('project-carousel')
        let slideNav = document.getElementsByClassName('slide-selector')
        let parent = slides[ 0 ].parentNode
        let slideWidth = slides[0].clientWidth
        let totalSpacing = 48 * slide

        for (let i = 0; i < slideNav.length; i++) {
            slideNav[i].className = defaultSlideNavStyle + ' w-2 opacity-40'
        }
        slideNav[slide].className = defaultSlideNavStyle + ' w-6 opacity-80'

        for (let i = 0; i < slides.length; i++) {
            slides[i].className = defaultSlideStyle + ' opacity-50'
        }
        slides[slide].className = defaultSlideStyle + ' opacity-100'

        /* parent.style['margin-left'] = (0.5*slides[0].clientWidth) + 'px' */

        parent.style['transform'] = 'translate(' + (((window.innerWidth/2) - 96 - totalSpacing - (slide * slideWidth) - (slideWidth/2))) + 'px, 0)' // god help me
    }, [slide])

    return (
        <div className="flex flex-col w-full px-24 py-16">
            <h2 className="mx-auto font-sans font-extrabold text-center text-4xl tracking-tight">Projects</h2>
            <div className="flex flex-row mt-8 md:h-72 lg:h-120 w-full overflow-x-visible">
                {
                    data.map((item, i) => {
                        return (
                            <div
                                className={defaultSlideStyle}
                                key={"project-carousel-" + i}
                                onClick={(e) => setSlide(i)}
                            >
                                <item.objects.Component/>
                            </div>
                        )
                    })
                }
            </div>
            <div className="flex flex-row space-x-1 my-8 mx-auto">
                {
                    data.map((item, i) => {
                        return (
                            <div
                                className={defaultSlideNavStyle}
                                key={"slide-selector-" + i}
                                onClick={(e) => setSlide(i)}
                            ></div>
                        )
                    })
                }
            </div>
        </div>
    )
}
