import Headline from "@/app/ui/headline/headline";

export default function Page() {
    return (
        <div>
          <div className="w-full h-1 bg-[#D9D9D9]">
            <div className="w-[93vw] h-1 bg-highlight" />
          </div>
    
          <div className="ml-6 mt-6 mb-7">
            <Headline
              title="Step 5. 의뢰자 정보"
              description="이제 정말 마지막이에요! 👏"
            />
          </div>
    
          
        </div>
      );
    }
    