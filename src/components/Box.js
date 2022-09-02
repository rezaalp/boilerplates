export const Box = ()=>{
    return (
        <mesh>
        <boxBufferGeometry attach={'geometry'} />
        <meshLambertMaterial attach={'material'} color={'hotpink'} />
        </mesh>
    )
}