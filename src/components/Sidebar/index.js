import React from 'react'
import { 
    SidebarContainer, 
    Icon, 
    CloseIcon, 
    SidebarMenu, 
    SidebarLink, 
    SidebarRoute, 
    SideBtnWrap
} from './SidebarElements'


const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarMenu>
                <SidebarLink to="/">Hamburguesas</SidebarLink>
                <SidebarLink to="/">Pizzas</SidebarLink>
                <SidebarLink to="/">Batidos</SidebarLink>
                <SidebarLink to="/">Cocina China</SidebarLink>
                <SidebarLink to="/">Menú Completo</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/">Ordena Ahora!</SidebarRoute>
            </SideBtnWrap>
        </SidebarContainer>
    )
}

export default Sidebar