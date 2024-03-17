import Headline from "@/app/ui/headline/headline";

export default function Page() {
  return (
    <div>
      <div className="w-full h-1 bg-[#D9D9D9]">
        <div className="w-[93vw] h-1 bg-highlight" />
      </div>

      <div className="ml-6 mt-6 mb-7">
        <Headline
          title="Step 4. 로그인"
          description="거의 다 왔어요! 👏"
        />
      </div>

    </div>
  );
}
