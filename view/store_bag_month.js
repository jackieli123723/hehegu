﻿
my.moudle = my.moudle || {};

(function () {
    var a = new my.table();
    var prop = {
        year: '',//所属年份
        month: '',//所属月份
        method: 'order->getOrderlistByMonth',
        store: '',
        store_id: '',
        template_url: 'view/store_bag_month.html',
        arges: {},
        data: {},
        title: '山西和合谷{store}{year}年{month}月月结盘点表',
        init: function () {
            var date = new Date();
            if (!this.year) this.year = date.getFullYear();
            if (!this.month) {
                this.month = date.getMonth() + 1;
                var day = date.getDate();
                if (day == 1) {
                    this.month--;
                    if (this.month == 0) {
                        this.year--;
                        this.month = 12;
                    }
                }
            }
            if (my.user.info.bumen != '门店' && !this.store_id) this.store_id = getOneStore_ID();
            this.arges = {
                year: this.year,
                month: this.month,
                store_id: this.store_id || my.user.info.store_id
            }
        },
        getTitle: function () {
            var store_id = this.store_id || my.user.info.store_id;
            return this.title ? this.title.replace(/{year}/g, this.year).replace(/{month}/g, this.month).replace(/{store}/g, getStoreName(store_id)).replace(/{startday}/g, this.startday).replace(/{endday}/g, this.endday) : '';
        },
        initData: function (data) {
            this.data = data;
        }
    };
    my.extend(a, prop);
    my.moudle.store_bag_month = a;
})();