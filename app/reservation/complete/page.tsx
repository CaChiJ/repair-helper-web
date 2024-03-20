import Headline from "@/app/ui/headline/headline";

export default function Page() {
    return (
        <div>
          <div className="w-full h-1 bg-[#D9D9D9]">
            <div className="w-[100vw] h-1 bg-highlight" />
          </div>
    
          <div className="ml-6 mt-6 mb-7">
            <Headline
              title="기사님께 의뢰서를 보냈어요 🎉"
              description="기사님에게 응답이 오면 문자메시지로 알려드릴게요"
            />
          </div>
        </div>
      );
    }
    