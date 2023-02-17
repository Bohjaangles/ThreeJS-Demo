import {
    useGLTF,
    Environment,
    Float,
    PresentationControls,
    ContactShadows,
    Html,
    Text,
} from '@react-three/drei'

export default function Experience() {
    const computer = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')
    return( 
    <>
        <Environment preset='city'/>
        <color args={['#241a1a']} attach='background'/>
        {/* controls for the way the computer object is positioned and interacted with */}
        <PresentationControls 
            global 
            rotation={[0.13, 0.1, 0]} 
            polar={[-0.4, 0.2]}
            azimuth={[-1, 0.75]}
            config={{mass: 2, tension: 400}}
            snap={{mass: 4, tension: 400}}
        >
            <Float
                rotationIntensity={0.4}
            >
                {/* the light coming off of the computer */}
                <rectAreaLight 
                    width={2.5}
                    height={1.65}
                    intensity={65}
                    color={'#6E9FAC'}
                    rotation={[0.1, Math.PI, 0]}
                    position={[0, 0.55, -1.15]}
                />
                {/* the container for what is rendered on computer */}
                <primitive 
                    object={computer.scene} 
                    position-y={-1.2}
                >
                    {/* the link to what is rendered on computer */}
                    <Html
                        transform
                        wrapperClass='htmlScreen'
                        distanceFactor={1.17}
                        position={[0, 1.56, -1.4]}
                        rotation-x={-0.256}
                    >
                        <iframe src={'https://haiku4u.vercel.app/'}></iframe>
                    </Html>
                </primitive>
                {/* For the Text on the right hand side */}
                <Text
                    font='./playfair-display-v30-latin-regular.woff'
                    fontSize={1}
                    position={[2, 1.05, 0.75]}
                    rotation-y={-1.25}
                    color='#6E9FAC'
                >
                    Russel
                </Text>
                <Text
                    font='./playfair-display-v30-latin-regular.woff'
                    fontSize={1}
                    position={[2, 0.15, 0.75]}
                    rotation-y={-1.25}
                    color='#6E9FAC'
                >
                    Mueller
                </Text>
            </Float>
        </PresentationControls>
        <ContactShadows 
            position-y={-1.4}
            opacity={0.4}
            scale={6}
            blur={2.4}
        />
    </>
)}
