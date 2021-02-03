var app = new Vue({
  el: "#app",
  data: {
    package: 3,
    activePackage: {},
    price: 0,
    pageViews: "",
    yearlyBilling: false,
    sliderClass: "slider-3",
    packages: [
      { id: 1, pageViews: "10K", price: 8 },
      { id: 2, pageViews: "50K", price: 12 },
      { id: 3, pageViews: "100K", price: 16 },
      { id: 4, pageViews: "500K", price: 24 },
      { id: 5, pageViews: "1M", price: 36 },
    ],
  },
  methods: {
    getPackage() {
      this.activePackage = this.packages.find((el) => {
        return el.id == this.package;
      });
      this.price = this.yearlyBilling
        ? (
            this.activePackage.price.toFixed(2) -
            (this.activePackage.price.toFixed(2) / 100) * 25
          ).toFixed(2)
        : this.activePackage.price.toFixed(2);
      this.pageViews = this.activePackage.pageViews;
      this.sliderClass = "slider-" + this.package;
    },
  },
  mounted() {
    this.getPackage();
  },
  watch: {
    package: function () {
      this.getPackage();
    },
    yearlyBilling: function () {
      this.getPackage();
    },
  },
  computed: {
    printPrice() {
      return this.price;
    },
    printViews() {
      return this.activePackage[0].pageViews;
    },
  },
});
