export default function Page() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col justify-center mt-6 ml-6 text-xl font-bold">
        <p>믿을만한 업체 선정부터</p>
        <p>수리 의뢰와 예약까지</p>
        <p>
          <span className="text-highlight">한 번에</span> 도와드릴게요 🚀
        </p>
      </div>
      <div className="flex flex-col mt-20">
        <div className="flex flex-row justify-between my-4">
          <div className="flex flex-col justify-between h-20 ml-6">
            <p className="font-bold text-base">믿을만한 업체만 골라드릴게요</p>
            <p className="font-normal text-xs text-weak">OO는 컴퓨터 수리 업체들과 제휴를 맺어</p>
            <p className="font-normal text-xs text-weak">실시간으로 모니터링하고 있어요.</p>
            <p className="font-normal text-xs text-weak">덤탱이를 맞지 않도록 OO가 잘 감시할게요 😎</p>
          </div>
          <div className="flex justify-center items-center pr-6 pl-2 text-[0.625rem]">자세히 보기</div>
        </div>
        <div className="flex flex-row justify-between my-4">
          <div className="flex flex-col justify-between h-20 ml-6">
            <p className="font-bold text-base">피해를 입으시면 전액 환불해드려요</p>
            <p className="font-normal text-xs text-weak">OO의 실시간 감시망에 덤탱이로</p>
            <p className="font-normal text-xs text-weak">추정되는 사례가 신고되거나 적발되면</p>
            <p className="font-normal text-xs text-weak">의뢰자님께 전액 환불해드리고 있어요!💸</p>
          </div>
          <div className="flex justify-center items-center pr-6 pl-2 text-[0.625rem]">자세히 보기</div>
        </div>
      </div>

      <div className="fixed left-0 right-0 bottom-0 flex justify-center items-center rounded-xl text-white bg-highlight text-lg font-bold h-14 mx-3 mb-3">
        수리 의뢰하기
      </div>
    </div>
  );
}
