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

            <v-card-subtitle> {{ application.description }}</v-card-subtitle>

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
          description: 'Mô tả ứng dụng 1',
          image:
            'https://cdn.thuvienphapluat.vn/tintuc/uploads/image/2021/06/04/so-do.jpg',
        },
        {
          name: 'Căn cước công dân',
          description: 'Mô tả ứng dụng',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/a/a2/Stylized_Vietnamese_Citizen_Identity_Card_sample.jpg',
        },
        {
          name: 'Giấy tờ xe',
          description: 'Mô tả ứng dụng 2',
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl0wBfxS2U7I55mjG3QLAJJN38tM9UXIQKdKB1iXIZv42wywwbWLENKzGLDVPlgMHz5Mo&usqp=CAU',
        },
        {
          name: 'Đăng ký kinh doanh',
          description: 'Mô tả ứng dụng 2',
          image:
            'https://tuvanquangminh.com/wp-content/uploads/2021/08/giay-chung-nhan-dang-ky-doanh-nghiep.jpg',
        },
        {
          name: 'Hoá đơn',
          description: 'Mô tả ứng dụng 2',
          image:
            'https://einvoice.vn/FileUpload/ArticleMaterials/images/mau-hoa-don-3(2).png',
        },
        {
          name: 'Phiếu lao động',
          description: 'Mô tả ứng dụng 2',
          image:
            'https://cdn.thuvienphapluat.vn/phap-luat/2022/202201/Hung/thong-tin.jpg',
        },
        {
          name: 'Thẩm định hồ sơ',
          description: 'Mô tả ứng dụng 2',
          image:
            'https://dauthau.asia/uploads/news/2021_02/tham-dinh-ho-so-moi-thau.png',
        },
      ],
    }
  },
  methods: {},
}
</script>
