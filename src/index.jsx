import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'
import { Html, useProgress } from '@react-three/drei'
import { Suspense } from 'react'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <Canvas
        flat
        camera={ {
            fov: 35,
            near: 0.1,
            far: 100,
            position: [ -1.8, 2, 4 ]
        } }
    >
        <Experience />
    </Canvas>
)