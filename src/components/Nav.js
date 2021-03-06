import React from "react"
import { Container } from "react-bootstrap"
import styles from "../styles/Nav.module.css"
import Button from "./Button"
import Link from "next/link"



export default function Nav(props) {
    return (
        <div className={styles.container}>
            <Container>
                <Link href="/">
                    <div className={styles.linkContainer}>
                        <div className={styles.img_container}><img className={styles.img} src={props.icon.url} /></div>
                        <div className={styles.title}>{props.title}</div>
                    </div>
                </Link>
                <Link href="/contact"><div className={styles.button}><Button>{props.button}</Button></div></Link> 
            </Container>
        </div>
    )
}

