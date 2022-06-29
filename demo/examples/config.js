/**
 * ExamplesforCesium 示例配置文件：包含示例的分类、名称、缩略图、文件路径
 */
var identification = {
    name: "TTmap"
};

var exampleConfig = {
    "2D": {
        name: "2D",
        content: {
            "地图示例": {
                name: "地图示例",
                content: [{
                    name: "OMS地图",
                    thumbnail: "xingkong.gif",
                    fileName: "ol_Map_OMS"
                }, {
                    name: "bing地图",
                    thumbnail: "",
                    fileName: "ol_Map_Bing"
                }, {
                    name: "谷歌地图-封闭",
                    thumbnail: "",
                    fileName: "ol_Map_GoogleMap"
                }, {
                    name: "高德地图",
                    thumbnail: "",
                    fileName: "ol_Map_GaoDeMap"
                }, {
                    name: "天地图地图",
                    thumbnail: "",
                    fileName: "ol_Map_TiandituMap"
                }, {
                    name: "百度地图-封闭",
                    thumbnail: "",
                    fileName: "ol_Map_BaiduMap"
                }, {
                    name: "ArcGIS地图",
                    thumbnail: "",
                    fileName: "ol_Map_ArcGIS"
                },
                {
                    name: "矢量切片地图MapBox-",
                    thumbnail: "",
                    fileName: "ol_Map_MVT"
                },
                {
                    name: "瓦片网格描述",
                    thumbnail: "",
                    fileName: "ol_Map_CanvasTiles"
                },
                ]
            },
            "控件": {
                name: "控件",
                content: [{
                    name: "设置背景",
                    thumbnail: "",
                    fileName: "ol_Control_Background"
                }, {
                    name: "导航控件",
                    thumbnail: "",
                    fileName: "ol_Control_ZoomSlider"
                }, {
                    name: "鼠标位置",
                    thumbnail: "",
                    fileName: "ol_Control_MousePosition"
                }, {
                    name: "比例尺",
                    thumbnail: "",
                    fileName: "ol_Control_ScaleLine"
                }, {
                    name: "全屏",
                    thumbnail: "",
                    fileName: "ol_Control_FullScreen"
                }, {
                    name: "鹰眼图",
                    thumbnail: "",
                    fileName: "ol_Control_OverviewMap"
                }, {
                    name: "测量",
                    thumbnail: "",
                    fileName: "ol_Control_Measure"
                }, {
                    name: "控件自定义样式",
                    thumbnail: "",
                    fileName: "ol_Control_CustomStyles"
                }, {
                    name: "视图基础操作",
                    thumbnail: "",
                    fileName: "ol_Control_ViewBasic"
                }, {
                    name: "视图动画",
                    thumbnail: "",
                    fileName: "ol_Control_ViewAnimation"
                }, {
                    name: "视图Feature-要素范围",
                    thumbnail: "",
                    fileName: "ol_Control_View_Features_Extent"
                }, {
                    name: "视图Feature-平移到中心",
                    thumbnail: "",
                    fileName: "ol_Control_View_Features_Center"
                }, {
                    name: "卷帘",
                    thumbnail: "",
                    fileName: "ol_Control_Roller"
                },

                ]
            },
            "OGC": {
                name: "OGC",
                content: [{
                    name: "WFS",
                    thumbnail: "",
                    fileName: "ol_OMS_WFS"
                }, {
                    name: "WMS",
                    thumbnail: "",
                    fileName: "ol_OMS_WMS"
                },
                {
                    name: "WMTS",
                    thumbnail: "",
                    fileName: "ol_OMS_WMTS"
                }, {
                    name: "TMS",
                    thumbnail: "",
                    fileName: "ol_OMS_TMS"
                }, {
                    name: "WFS_GetFeature",
                    thumbnail: "",
                    fileName: "ol_OMS_WFS_GetFeature"
                }, {
                    name: "WFS_Filter",
                    thumbnail: "",
                    fileName: "ol_OMS_WFS_Filter"
                }, {
                    name: "WFS_CQL_Filter",
                    thumbnail: "",
                    fileName: "ol_OMS_WFS_CQL_Filter"
                }, {
                    name: "WFS_加载数据_writeGetFeature",
                    thumbnail: "",
                    fileName: "ol_OMS_WFS_writeGetFeature"
                }, {
                    name: "WFS_Transaction",
                    thumbnail: "",
                    fileName: "ol_OMS_WFS_Transaction"
                }, {
                    name: "WMS_GetFeatureInfo",
                    thumbnail: "",
                    fileName: "ol_OMS_WMS_GetFeatureInfo"
                }, {
                    name: "WMS_CQL_Filter",
                    thumbnail: "",
                    fileName: "ol_OMS_WMS_CQL_Filter"
                }, {
                    name: "WMS_GetLegend",
                    thumbnail: "",
                    fileName: "ol_OMS_WMS_GetLegend"
                }, {
                    name: "WMS_GetLegendGraphic",
                    thumbnail: "",
                    fileName: "ol_OMS_WMS_GetLegendGraphic"
                },
                ]
            },
            "图层样式": {
                name: "图层样式",
                content: [{
                    name: "唯一值渲染",
                    thumbnail: "",
                    fileName: "ol_Layer_UniqueValue"
                }, {
                    name: "断点值渲染",
                    thumbnail: "",
                    fileName: "ol_Layer_BreakValue"
                }, {
                    name: "热力图渲染",
                    thumbnail: "",
                    fileName: "ol_Layer_HeatMap"
                }, {
                    name: "聚散渲染",
                    thumbnail: "",
                    fileName: "ol_Layer_Cluster"
                }
                ]
            },
            "交互": {
                name: "交互",
                content: [{
                    name: "绘制几何图形",
                    thumbnail: "",
                    fileName: "ol_Interactions_DrawFeatures"
                }, {
                    name: "样式编辑",
                    thumbnail: "",
                    fileName: "ol_Interactions_FeaturesStyle"
                }, {
                    name: "图形交互编辑",
                    thumbnail: "",
                    fileName: "ol_Interactions_ModifyFeatures"
                }
                ]
            },
            "地图事件": {
                name: "地图事件",
                content: [{
                    name: "概述",
                    thumbnail: "",
                    fileName: "ol_Event_Base"
                }, {
                    name: "WFS单击事件(getFeaturesAtPixel)",
                    thumbnail: "",
                    fileName: "ol_Event_WFS_Singleclick_getFeaturesAtPixel"
                }, {
                    name: "WFS单击事件(forEachFeatureAtPixel)",
                    thumbnail: "",
                    fileName: "ol_Event_WFS_Singleclick_forEachFeatureAtPixel"
                }, {
                    name: "WFS单击事件(select)",
                    thumbnail: "",
                    fileName: "ol_Event_WFS_Singleclick_Select"
                }, {
                    name: "WFS移入移除事件（forEachFeatureAtPixel）",
                    thumbnail: "",
                    fileName: "ol_Event_WFS_Pointmove_forEachFeatureAtPixel"
                }, {
                    name: "WFS移入移除事件（select）",
                    thumbnail: "",
                    fileName: "ol_Event_WFS_Pointmove_Select"
                }, {
                    name: "WMS移入移除事件（hit）------",
                    thumbnail: "",
                    fileName: "ol_Event_WMS_Pointmove_hit"
                },
                ]
            },
            "地图标注": {
                name: "地图标注",
                content: [{
                    name: "气泡框",
                    thumbnail: "",
                    fileName: "ol_Marker_Popup"
                }, {
                    name: "添加图文标注",
                    thumbnail: "",
                    fileName: "ol_Marker_PictureText"
                }]
            },
            "坐标系": {
                name: "坐标系",
                content: [{
                    name: "投影变换",
                    thumbnail: "",
                    fileName: "ol_Projections_Transform_Map"
                }, {
                    name: "常用方法",
                    thumbnail: "",
                    fileName: "ol_Projections_Transform_Method"
                }]
            },
            "查询汇总": {
                name: "查询汇总（前端）",
                content: [{
                    name: "点击查询",
                    thumbnail: "",
                    fileName: "ol_Query_Click"
                }, {
                    name: "filter条件查询",
                    thumbnail: "",
                    fileName: "ol_Query_attributeFilter"
                }, {
                    name: "filter空间查询",
                    thumbnail: "",
                    fileName: "ol_Query_spatialFilter"
                }, {
                    name: "Turf相交查询",
                    thumbnail: "",
                    fileName: "ol_Query_turfIntersect"
                }, {
                    name: "Turf缓冲区查询",
                    thumbnail: "",
                    fileName: "ol_Query_turfBuffer"
                }
                ]
            },
        }
    }
};
/**
 *key值：为exampleConfig配置的key值或者fileName值
 *      （为中间节点时是key值，叶结点是fileName值）
 *value值：fontawesome字体icon名
 *不分层
 */
var sideBarIconConfig = {
    "3D": "fa-globe",
    "2D": "fa fa-map",
    "二三维一体化": "fa-pie-chart",
};

/**
 *key值：为exampleConfig配置的key值
 *value值：fontawesome字体icon名
 *与sideBarIconConfig的区别：sideBarIconConfig包括侧边栏所有层级目录的图标，exampleIconConfig仅包括一级标题的图标
 */
var exampleIconConfig = {
    "3D": "fa-globe",
    "2D": "fa fa-map",
    "二三维一体化": "fa-pie-chart",
};