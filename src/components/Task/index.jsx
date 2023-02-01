import { Container } from "./styles"

export function Task({isNew, value}){
    return (
        <Container isNew={isNew}>
            <input 
                type="text"
                value={value}
                readOnly={!isNew}
            />

            <button
                type="button"
            >

            </button>
        </Container>
    )
}