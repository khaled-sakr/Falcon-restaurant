function CartItem({ item }) {
  const { name, grediants, time, price, amount } = item;
  const someGradiants = grediants.slice(0, 6);
  return (
    <>
      <li className=" sm:text-base text-sm text-stone-300 grid border-amber-800 border-b-[1px] pb-9 ">
        <span>Name Of Meal : {name}</span>
        <span>Price Item : {price} $</span>
        <span>Preparing-Time : {time} min</span>
        <span>quantity : {amount} </span>
        <div>{someGradiants.join(", ")}...</div>
      </li>
    </>
  );
}

export default CartItem;
