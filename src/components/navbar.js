import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components';
import {ButtonContainer} from './button';
export default class Navbar extends Component{
	render(){
		return(
			<NavWrapper className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
			
			<Link to="/">
			<img src={logo} alt='store' className="navbar-brand"/>
			</Link>
			<ul className="navbar-nav align-items-center">
				<li className="nav-itens ml-5">
					<Link to="/" class="nav-link">Products</Link>	
				</li>
			</ul>
			<Link to='/cart' className="ml-auto">
				<ButtonContainer>
					<span className="mr-2">
					<i className="fas fa-cart-plus" />
					</span>
					my cart
				</ButtonContainer>
			</Link>
			
			</NavWrapper>
		);	
	}
}

const NavWrapper = styled.nav`
	background: var(--mainDark)!important;
	.nav-link{
		color:var(--mainWhite)!important;
		font-size:1.3rem;
		text-transfrom:capitalize;
	}	
`

