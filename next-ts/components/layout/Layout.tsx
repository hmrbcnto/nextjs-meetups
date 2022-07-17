import React, { FunctionComponent } from 'react'

import MainNavigation from './MainNavigation';
import classes from './Layout.module.css';

interface LayoutProps {
	children: JSX.Element | JSX.Element[]
}

const Layout: FunctionComponent<LayoutProps> = (props: LayoutProps) => {
	return (
		<div>
			<MainNavigation />
			<main className={classes.main}>
				{props.children}
			</main>
		</div>
	)
}