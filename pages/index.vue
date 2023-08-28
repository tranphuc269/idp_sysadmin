<template>
  <v-card width="100%">
    <v-card-title>
      Quản lý tổ chức
      <v-spacer />
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Tìm kiếm"
        single-line
        hide-details
      />
    </v-card-title>
    <v-data-table :headers="headers" :items="desserts" :search="search" />
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      search: '',
      headers: [
        {
          text: 'Tên tổ chức',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'Thương hiệu', value: 'brandname' },
        { text: 'Ngày tạo', value: 'createdAt' },
        { text: 'SL thành viên', value: 'totalUser' },
        { text: 'Số lượng tài liệu', value: 'totalDocument' },
        { text: 'Dung tích lưu trữ', value: 'totalDocumentSize' },
      ],
      desserts: [
        {
          name: 'Tập đoàn công nghiệp - viễn thông Viettel',
          brandname: 'viettelgroup',
          createdAt: '26/82023',
          totalUser: 152,
          totalDocument: 9853,
          totalDocumentSize: '120.5GB',
        },
        {
          name: 'Ngân hàng ACB',
          brandname: 237,
          createdAt: '26/82023',
          totalUser: 152,
          totalDocument: 9853,
          totalDocumentSize: '120.5GB',
        },
        {
          name: 'Ngân hàng MBB',
          brandname: 262,
          createdAt: '26/82023',
          totalUser: 152,
          totalDocument: 9853,
          totalDocumentSize: '120.5GB',
        },
        {
          name: 'Bộ lao động thương binh xã hội',
          brandname: 305,
          createdAt: '26/8/2023',
          totalUser: 152,
          totalDocument: 9853,
          totalDocumentSize: '120.5GB',
        },
        {
          name: 'FPT',
          brandname: 356,
          createdAt: '26/8/2023',
          totalUser: 152,
          totalDocument: 9853,
          totalDocumentSize: '120.5GB',
        },
        {
          name: 'VNPT',
          brandname: 375,
          createdAt: '26/8/2023',
          totalUser: 152,
          totalDocument: 9853,
          totalDocumentSize: '120.5GB',
        },
        {
          name: 'Lollipop',
          brandname: 392,
          createdAt: '26/8/2023',
          totalUser: 152,
          totalDocument: 9853,
          totalDocumentSize: '120.5GB',
        },
        {
          name: 'Honeycomb',
          brandname: 408,
          createdAt: '26/12/2023',
          totalUser: 152,
          totalDocument: 9853,
          totalDocumentSize: '120.5GB',
        },
        {
          name: 'Donut',
          brandname: 452,
          createdAt: '15/8/2023',
          totalUser: 152,
          totalDocument: 9853,
          totalDocumentSize: '120.5GB',
        },
        {
          name: 'KitKat',
          brandname: 518,
          createdAt: '29/8/2023',
          totalUser: 152,
          totalDocument: 9853,
          totalDocumentSize: '120.5GB',
        },
      ],
    }
  },
}
</script>
