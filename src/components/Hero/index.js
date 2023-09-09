import React, {useState} from 'react'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import { 
    HeroContainer, 
    HeroContent, 
    HeroItems, 
    HeroH1, 
    HeroB, 
    HeroBtn 
} from './HeroElements'


const Hero = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <HeroContainer>
            <Navbar toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <HeroContent>
                <HeroItems>
                    <HeroH1>Los mejores platillos a la parrilla</HeroH1>
                    <br/>
                    <br/>
                    <br/>
                    <HeroB>Ahora ya en Chimaltenango!</HeroB>
                    <HeroBtn>Pide tu orden!</HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>

    )
}

export default Hero
