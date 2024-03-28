const users = [
    {
      id: '410544b2-4001-4271-9855-fec4b6a6442a',
      name: 'User',
      phone: '010-2842-7777',
    },
]

const mechanics = [
    {
        id: '410564b2-4001-4271-9855-fec4b6a6442a',
        name: '자운 컴퓨터 수리',
        address: '대전 유성구 자운로 99',
        reliability: 'safe',
        rating: 86
    },
    {
        id: '410544c2-4001-4271-9855-fec4b6a6442a',
        name: '오렌지 컴퓨터',
        address: '대전 유성구 온천로 143',
        reliability: 'safe',
        rating: 62
    },
    {
        id: '410544b3-4001-4271-9855-fec4b6a6442a',
        name: '컴퓨터 수리 전문점',
        address: '대전 서구 둔산중로78번길 34',
        reliability: 'suspected',
        rating: 58
    }
];

const repairRequests = [
    {
        id: '410544b6-4001-4271-9855-fec4b6a6442a',
        name: '최현준',
        phone: '01028427239',
        address: '대전 유성구 자운로 99 209호',
        mechanic_id: '410564b2-4001-4271-9855-fec4b6a6442a',
        is_on_site: true,
        is_agreed: true,
        reservation_date: '2024-04-22 20:00:00',
        is_booted: true,
        is_powered: true
    }
]

const bills = [
    {
        id: '410564b2-7239-4271-9855-fec4b6a6442a',
        repair_request_id: '410544b6-4001-4271-9855-fec4b6a6442a',
        image_url: 'naver.com',
        is_agreed: null,
        price: 130000,
    }
]

module.exports = {
    users,
    mechanics,
    repairRequests,
    bills
};