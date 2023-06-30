function Header() {
  return (
    <div className="w-[1440px] h-[91px] px-[175px] justify-center items-start gap-[684px] inline-flex">
      <div className="text-white text-[16px] font-bold">Logo</div>
      <div className="self-stretch justify-start items-start gap-[107px] inline-flex">
        <div className="text-white text-[16px] font-normal">About</div>
        <div className="text-white text-[16px] font-normal">Pricing</div>
        <div className="text-white text-[16px] font-normal">Review</div>
      </div>
    </div>
  );
}

export default Header;
