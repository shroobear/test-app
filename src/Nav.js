const Nav = () => {
    const sectionArray = ['starters', 'pizzas', 'desserts', 'drinks']
  
    return (
      <nav>
        <ul>
          {sectionArray.map((sectionName) => {
            return (
              <li>
                <a href={"#" + sectionName}>{sectionName}</a>
              </li>
            )
          })}
        </ul>
      </nav>
    )
  }

  export default Nav;