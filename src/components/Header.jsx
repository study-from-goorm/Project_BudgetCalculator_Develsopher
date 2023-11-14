import logo from '../assets/todo-logo.png';
function Header() {
  return (
    <header className="flex flex-col items-center my-8 md:mb-16">
      <img
        src={logo}
        alt="todo-logo"
        className=" mb-8 w-44 h-44 object-contain"
      />
      <h1 className="text-xl md:text-4xl font-semibold tracking-widest text-center uppercase text-white font-title">
        Budget Calculator
      </h1>
      <p className="text-stone-200">How much do you expect?</p>
    </header>
  );
}

export default Header;
