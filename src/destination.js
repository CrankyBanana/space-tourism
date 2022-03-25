import './destination.css';
import Nav from './nav'
import Moon from './assets/destination/image-moon.png'
import Mars from './assets/destination/image-mars.png'
import Europa from './assets/destination/image-europa.png'
import Titan from './assets/destination/image-titan.png'
import { useState } from 'react'

function Destination() {
    const moonDesc = "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites."
    const marsDesc = "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!"
    const europaDesc = "The smallest of the four Galilean moons orbiting Jupiter, Europa is a inter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin."
    const titanDesc = "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn."

    const moonStats = ["384,400 KM", "3 DAYS"]
    const marsStats = ["225 MIL. KM", "9 MONTHS"]
    const europaStats = ["628 MIL. KM", "3 YEARS"]
    const titanStats = ["1.6 BIL. KM", "7 YEARS"]


    const handlePlanet = (planet) => {
        switch(planet) {
            default:
                setCurrentPlanet("Moon")
                setPlanetInfo(moonDesc)
                setPlanetSrc(Moon)
                setPlanetStats(moonStats)
                setActiveIndex(0)
                break;
            case "Mars":
                setCurrentPlanet("Mars")
                setPlanetInfo(marsDesc)
                setPlanetSrc(Mars)
                setPlanetStats(marsStats)
                setActiveIndex(1)
                break;
            case "Europa":
                setCurrentPlanet("Europa")
                setPlanetInfo(europaDesc)
                setPlanetSrc(Europa)
                setPlanetStats(europaStats)
                setActiveIndex(2)
                break;
            case "Titan":
                setCurrentPlanet("Titan")
                setPlanetInfo(titanDesc)
                setPlanetSrc(Titan)
                setPlanetStats(titanStats)
                setActiveIndex(3)
                break;
        }
    }

    const [currentPlanet, setCurrentPlanet] = useState("Moon")
    const [planetSrc, setPlanetSrc] = useState(Moon)
    const [planetInfo, setPlanetInfo] = useState(moonDesc)
    const [planetStats, setPlanetStats] = useState(["384,400 KM", "3 DAYS"])
    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <div className="main">
            <Nav />
            <div className="body">
                <div className="pick">
                    <div className="pickText"><div className="pickNumber">01</div>PICK YOUR DESTINATION</div>
                    <img src={planetSrc} alt=""></img>
                </div>
                <div className="planet">
                    <div className="planetNav">
                        <ul className="planetNavItems">
                            <li className={activeIndex === 0 && "planetActive"} onClick={() => handlePlanet("Moon")}>Moon</li>
                            <li className={activeIndex === 1 && "planetActive"} onClick={() => handlePlanet("Mars")}>Mars</li>
                            <li className={activeIndex === 2 && "planetActive"} onClick={() => handlePlanet("Europa")}>Europa</li>
                            <li className={activeIndex === 3 && "planetActive"} onClick={() => handlePlanet("Titan")}>Titan</li>
                        </ul>
                        <div className="h2">{currentPlanet}</div>
                        <div className="planetInfo">{planetInfo}</div>
                        <hr></hr>
                        <div className="planetStats">
                            <div className="sh2">AVG. Distance</div>
                            <div className="sh2">EST. TRAVEL TIME </div>
                            <div className="stat">{planetStats[0]}</div>
                            <div className="stat">{planetStats[1]}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Destination;