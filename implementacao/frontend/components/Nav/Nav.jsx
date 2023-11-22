const Nav = (props) => (
    <>
        <nav className="navbar">
            <div className="container-fluid">
                {props.children}
            </div>
        </nav>
    </>
);

export default Nav;