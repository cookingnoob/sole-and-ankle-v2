import { formatPrice, isNewShoe } from "../../utils";

export default function ShoeCard({ shoe }) {
  return (
    <article className="relative">
      <div className="w-85">
        <img src={shoe.imageSrc} alt={shoe.name} className="rounded-t-2xl rounded-b-sm" style={{ width: "100%" }} />
      </div>
      <NewTag release={shoe.releaseDate} />
      <SalesTag sale={shoe.salePrice} />
      <div className="flex justify-between">
        <h1 className="font-bold size-4]">{shoe.name}</h1>
        <ShoePrice price={shoe.price} sale={shoe.salePrice}/>
      </div>

      <div className="flex justify-between">
        <ColorsP colors={shoe.numOfColors} />
        <SalesPrice price={shoe.salePrice} />
      </div>
    </article>
  );
}

function NewTag({ release }) {
  return isNewShoe(release) ? (
    <span className="bg-secondary-blue h-8 rounded-xs text-white absolute w-max pt-1.5 pr-2.5 pb-2.5 pl-2.5  top-5 left-55 flex justify-center">
      Just Released!
    </span>
  ) : null;
}

function SalesTag({ sale }) {
  return sale ? (
    <span className="bg-primary-red h-8 rounded-xs text-white absolute w-max pt-1.5 pr-2.5 pb-2.5 pl-2.5  top-5 left-73 flex justify-center">
      Sale
    </span>
  ) : null;
}

function SalesPrice({ price }) {
  return price ? (
    <p className="text-primary-red w-fit  ml-auto">{formatPrice(price)}</p>
  ) : null;
}

function ShoePrice({price, sale}) {

  return <p className={`${sale ? 'line-through' : ''}`}>{formatPrice(price)}</p>;
}

function ColorsP({ colors }) {
  return (
    <p className="font-ligth">{`${colors} ${
      colors > 1 ? "Colors" : "Color"
    }`}</p>
  );
}
