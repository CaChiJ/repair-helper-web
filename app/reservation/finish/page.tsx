import Headline from "@/app/ui/headline/headline";

export default function Page() {
    return (
        <div>
          <div className="w-full h-1 bg-[#D9D9D9]">
            <div className="w-[93vw] h-1 bg-highlight" />
          </div>
    
          <div className="ml-6 mt-6 mb-7">
            <Headline
              title="기사님께 의뢰서를 보냈어요 🎉"
              description="기사님에게 응답이 올 때까지 천천히 기다려주세요"
            />
          </div>
    
          
        </div>
      );
    }
    