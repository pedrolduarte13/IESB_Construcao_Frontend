import { Container } from "react-bootstrap";

export default function Pagina({titulo, children}) {
  return (
    <>
        <div className="bg-secondary text-white text-center py-2">
            <h1>{titulo}</h1>
        </div>
    
    <Container className="mt-2">
        {children}
    </Container>
    
    
    </>
  )
}
