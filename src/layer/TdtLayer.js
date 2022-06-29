import BaseLayer from "./BaseLayer";
/**
 * 天地图图层
 * @extends BaseLayer
 */
class TdtLayer extends BaseLayer{
    /**
     * 初始化
     * @param {object} options - 参数对象
     * @param {string} [options.id=uuid()] - 图层id标识
     * @param {string} [options.name] - 图层名称
     * @param {boolean} [options.show=true] - 图层是否显示
     * @param {Number} [options.zIndex] - zIndex
     * @param {alpha} [options.alpha=1] - alpha
     * @param {string} options.url - url http://t0.tianditu.com/img_c/wmts?layer=img&style=default&tilematrixset=c&Service=WMTS&Request=GetTile&Version=1.0.0&Format=tiles&TileMatrix={TileMatrix}&TileCol={TileCol}&TileRow={TileRow}&tk=f6616fa13df718e2cd6280af4c45f5a2
     * @param {string} options.crs - crs 例如 EPSG:4326
     */
    constructor(options){
        super(options);
        this.url=options.url ? options.url : "";
        if(this.url === null || this.url === ""){
            console.log("天地图地址不可为空!");
            return;
        }
        this.zIndex=options.zIndex;
        this.alpha=options.alpha ? options.alpha : 1;
        this.crs=options.crs;
        this.center=options.center;
        this.createLayer(options);
    }

    createLayer(options){
        if(this.crs.indexOf("4326")!=-1){
            this.provider= new Cesium.WebMapTileServiceImageryProvider({
                url: this.url,
                style: "default",
                format: "tiles",
                tileMatrixSetID: "c",
                tilingScheme: new Cesium.GeographicTilingScheme(),
                tileMatrixLabels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19"]
            })
        }else{
            this.provider= new Cesium.WebMapTileServiceImageryProvider({
                url: this.url
            })
        }

        this.tdt=new Cesium.ImageryLayer(this.provider,{show:this.show,alpha:this.alpha});
    }

    /**
     * 添加到地图上
     * @param {Globe} globe - 地图对象
     * @param {boolean} flyTo=false - 加载完成数据后是否自动飞行定位到数据所在的区域
     */
    addTo(globe,flyTo=false){
        super.addTo(globe);
        if(this.zIndex)
            this.globe.viewer.imageryLayers.add(this.tdt,this.zIndex);
        else
            this.globe.viewer.imageryLayers.add(this.tdt);
        if(flyTo&&this.center){
            this.globe.viewer.camera.flyTo({
                destination : Cesium.Cartesian3.fromDegrees(this.center.lng, this.center.lat, this.center.alt)
            });
        }
    }

    /**
     * 从地图上移除
     */
    remove(){
        if(this.globe) {
            this.globe.viewer.imageryLayers.remove(this.tdt);
            super.remove(globe);
        }
    }

    /**
     * @param {boolean} flag - 设置是否显示
     */
    setVisible(flag){
        super.setVisible(flag);
        this.tdt.show=flag;
    }
}
export default TdtLayer;
