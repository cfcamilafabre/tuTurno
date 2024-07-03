import Dropdown from "react-bootstrap/Dropdown";

export const DropdownMenu = () => {
    return (
        <>
        
        <Dropdown>
        <Dropdown.Toggle variant="primary" id="dropdown-basic">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
          </svg>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Inicio</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Nosotros</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Servicios</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Preguntas frecuentes</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Blog</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Contacto</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Agendar turno</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

</>
    )
}

export default DropdownMenu;