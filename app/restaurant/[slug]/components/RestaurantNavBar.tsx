import Link from "next/link";

export default function RestaurantNavBar() {
  return (
    <nav className="flex text-reg border-b pb-2">
      <Link href="/restaurant/mile-stone" className="mr-7">
        {" "}
        Overview{" "}
      </Link>
      <Link href="/restaurant/mile-stone/menu" className="mr-7">
        {" "}
        Menu{" "}
      </Link>
    </nav>
  );
}
