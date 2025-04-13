import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'
import * as THREE from 'three'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <Canvas
        flat
        camera={ {
            fov: 35,
            near: 0.1,
            far: 100,
            position: [ -3.5, 0.5, 6 ]
        } }
    >
        <Experience />
    </Canvas>
)