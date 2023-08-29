<template>
  <v-card>
    <v-card-title>
      <p class="text-high-emphasis text-h6">Quản lý ứng dụng</p>
    </v-card-title>
    <v-container class="bg-surface-variant">
      <v-row no-gutters>
        <v-col
          v-for="(application, index) in applications"
          :key="index"
          cols="12"
          sm="4"
        >
          <v-card class="mx-auto ma-3" max-width="344">
            <v-img
              :src="application.image"
              :lazy-src="application.image"
              height="200px"
              cover
            ></v-img>

            <v-card-title> {{ application.name }}</v-card-title>

            <v-card-subtitle class="subtitle-limit">
              {{ application.description }}
            </v-card-subtitle>

            <v-card-actions>
              <v-btn color="orange-lighten-2" variant="text"> Xem thêm</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      applications: [
        {
          name: 'Sổ đỏ',
          description:
            'Sổ đỏ là từ mà người dân thường dùng để gọi Giấy chứng nhận quyền sử dụng đất dựa theo màu sắc của Giấy chứng nhận; pháp luật đất đai từ trước tới nay không quy định về Sổ đỏ.',
          image:
            'https://cdn.thuvienphapluat.vn/tintuc/uploads/image/2021/06/04/so-do.jpg',
        },
        {
          name: 'Căn cước công dân',
          description:
            'Thẻ Căn cước công dân là một trong những loại giấy tờ tùy thân chính của công dân Việt Nam. Đây là hình thức mới của giấy chứng minh nhân dân, bắt đầu có hiệu lực từ năm ngày 1 tháng 1 năm 2016. Theo Luật căn cước công dân 2014, người từ 14 tuổi trở lên sẽ được cấp thẻ căn cước công dân',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/a/a2/Stylized_Vietnamese_Citizen_Identity_Card_sample.jpg',
        },
        {
          name: 'Giấy tờ xe',
          description:
            'Giấy tờ xe hay giấy tờ tùy thân là những vật “bất ly thân” khi ra ngoài đặc biệt là khi điều khiển phương tiện tham gia giao thông.',
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl0wBfxS2U7I55mjG3QLAJJN38tM9UXIQKdKB1iXIZv42wywwbWLENKzGLDVPlgMHz5Mo&usqp=CAU',
        },
        {
          name: 'Đăng ký kinh doanh',
          description:
            'Đăng ký kinh doanh là việc các chủ thể được phép hoạt động kinh doanh nộp hồ sơ đăng ký hoạt động đối với cơ quan nhà nước có thẩm quyền để được cấp phép cho hoạt động kinh doanh của mình theo quy định pháp luật (một cách hợp pháp)',
          image:
            'https://tuvanquangminh.com/wp-content/uploads/2021/08/giay-chung-nhan-dang-ky-doanh-nghiep.jpg',
        },
        {
          name: 'Hoá đơn',
          description:
            'Hoá đơn là một giấy tờ yêu cầu thanh toán các mặt hàng với số lượng và đơn giá liệt kê trong giấy tờ đó. Hóa đơn do bên bán phát hành. Sau khi bên mua thanh toán, bên bán sẽ xác nhận vào hóa đơn chẳng hạn như đóng dấu chứng nhận đã trả tiền. Khi đó, hóa đơn có cả tác dụng giống như biên lai hay giấy biên nhận',
          image:
            'https://einvoice.vn/FileUpload/ArticleMaterials/images/mau-hoa-don-3(2).png',
        },
        {
          name: 'Phiếu lao động',
          description:
            'Phiếu đăng ký dự tuyển lao động là loại giấy tờ cần phải có trong hồ sơ đăng ký dự tuyển lao động. Đồng thời phiếu đăng ký đảm bảo theo mẫu của Bộ Lao động – Thương binh và Xã hội. Phiếu đăng ký dự tuyển lao động là một trong các loại giấy tờ cần có trong hồ sơ dự tuyển (hồ sơ xin việc)',
          image:
            'https://cdn.thuvienphapluat.vn/phap-luat/2022/202201/Hung/thong-tin.jpg',
        },
        {
          name: 'Thẩm định hồ sơ',
          description:
            'Thẩm định Hồ sơ mời thầu (HSMT) được hiểu là quá trình Tổ thẩm định tiến hành xem xét, đánh giá và đưa ra kết luận đối với HSMT để làm cơ sở xem xét và phê duyệt HSMT.',
          image:
            'https://dauthau.asia/uploads/news/2021_02/tham-dinh-ho-so-moi-thau.png',
        },
      ],
    }
  },
  methods: {},
}
</script>

<style>
.subtitle-limit {
  white-space: nowrap;
  word-break: normal;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
