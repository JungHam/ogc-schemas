var SLD_1_0_0_Module_Factory = function () {
  var SLD_1_0_0 = {
    n: 'SLD_1_0_0',
    dens: 'http:\/\/www.opengis.net\/sld',
    dans: 'http:\/\/www.w3.org\/1999\/xlink',
    deps: ['XLink_1_0', 'Filter_1_0_0'],
    tis: [{
        ln: 'RANDOM',
        tn: null
      }, {
        ln: 'AnchorPoint',
        tn: null,
        ps: [{
            n: 'anchorPointX',
            rq: true,
            en: 'AnchorPointX',
            ti: '.ParameterValueType'
          }, {
            n: 'anchorPointY',
            rq: true,
            en: 'AnchorPointY',
            ti: '.ParameterValueType'
          }]
      }, {
        ln: 'PointSymbolizer',
        tn: null,
        bti: '.SymbolizerType',
        ps: [{
            n: 'geometry',
            en: 'Geometry',
            ti: '.Geometry'
          }, {
            n: 'graphic',
            en: 'Graphic',
            ti: '.Graphic'
          }]
      }, {
        ln: 'ParameterValueType',
        ps: [{
            n: 'content',
            col: true,
            dom: false,
            en: {
              lp: 'expression',
              ns: 'http:\/\/www.opengis.net\/ogc'
            },
            ti: 'Filter_1_0_0.ExpressionType',
            t: 'er'
          }]
      }, {
        ln: 'RasterSymbolizer',
        tn: null,
        bti: '.SymbolizerType',
        ps: [{
            n: 'geometry',
            en: 'Geometry',
            ti: '.Geometry'
          }, {
            n: 'opacity',
            en: 'Opacity',
            ti: '.ParameterValueType'
          }, {
            n: 'channelSelection',
            en: 'ChannelSelection',
            ti: '.ChannelSelection'
          }, {
            n: 'overlapBehavior',
            en: 'OverlapBehavior',
            ti: '.OverlapBehavior'
          }, {
            n: 'colorMap',
            en: 'ColorMap',
            ti: '.ColorMap'
          }, {
            n: 'contrastEnhancement',
            en: 'ContrastEnhancement',
            ti: '.ContrastEnhancement'
          }, {
            n: 'shadedRelief',
            en: 'ShadedRelief',
            ti: '.ShadedRelief'
          }, {
            n: 'imageOutline',
            en: 'ImageOutline',
            ti: '.ImageOutline'
          }]
      }, {
        ln: 'Extent',
        tn: null,
        ps: [{
            n: 'name',
            rq: true,
            en: 'Name'
          }, {
            n: 'value',
            rq: true,
            en: 'Value'
          }]
      }, {
        ln: 'Graphic',
        tn: null,
        ps: [{
            n: 'externalGraphicOrMark',
            mno: 0,
            col: true,
            etis: [{
                en: 'ExternalGraphic',
                ti: '.ExternalGraphic'
              }, {
                en: 'Mark',
                ti: '.Mark'
              }],
            t: 'es'
          }, {
            n: 'opacity',
            en: 'Opacity',
            ti: '.ParameterValueType'
          }, {
            n: 'size',
            en: 'Size',
            ti: '.ParameterValueType'
          }, {
            n: 'rotation',
            en: 'Rotation',
            ti: '.ParameterValueType'
          }]
      }, {
        ln: 'Font',
        tn: null,
        ps: [{
            n: 'cssParameter',
            mno: 0,
            col: true,
            en: 'CssParameter',
            ti: '.CssParameter'
          }]
      }, {
        ln: 'LATESTONTOP',
        tn: null
      }, {
        ln: 'FeatureTypeStyle',
        tn: null,
        ps: [{
            n: 'name',
            en: 'Name'
          }, {
            n: 'title',
            en: 'Title'
          }, {
            n: '_abstract',
            en: 'Abstract'
          }, {
            n: 'featureTypeName',
            en: 'FeatureTypeName'
          }, {
            n: 'semanticTypeIdentifier',
            mno: 0,
            col: true,
            en: 'SemanticTypeIdentifier'
          }, {
            n: 'rule',
            rq: true,
            col: true,
            en: 'Rule',
            ti: '.Rule'
          }]
      }, {
        ln: 'AVERAGE',
        tn: null
      }, {
        ln: 'Histogram',
        tn: null
      }, {
        ln: 'NamedStyle',
        tn: null,
        ps: [{
            n: 'name',
            rq: true,
            en: 'Name'
          }]
      }, {
        ln: 'Fill',
        tn: null,
        ps: [{
            n: 'graphicFill',
            en: 'GraphicFill',
            ti: '.GraphicFill'
          }, {
            n: 'cssParameter',
            mno: 0,
            col: true,
            en: 'CssParameter',
            ti: '.CssParameter'
          }]
      }, {
        ln: 'PointPlacement',
        tn: null,
        ps: [{
            n: 'anchorPoint',
            en: 'AnchorPoint',
            ti: '.AnchorPoint'
          }, {
            n: 'displacement',
            en: 'Displacement',
            ti: '.Displacement'
          }, {
            n: 'rotation',
            en: 'Rotation',
            ti: '.ParameterValueType'
          }]
      }, {
        ln: 'LinePlacement',
        tn: null,
        ps: [{
            n: 'perpendicularOffset',
            en: 'PerpendicularOffset',
            ti: '.ParameterValueType'
          }]
      }, {
        ln: 'Rule',
        tn: null,
        ps: [{
            n: 'name',
            en: 'Name'
          }, {
            n: 'title',
            en: 'Title'
          }, {
            n: '_abstract',
            en: 'Abstract'
          }, {
            n: 'legendGraphic',
            en: 'LegendGraphic',
            ti: '.LegendGraphic'
          }, {
            n: 'filter',
            rq: true,
            en: {
              lp: 'Filter',
              ns: 'http:\/\/www.opengis.net\/ogc'
            },
            ti: 'Filter_1_0_0.FilterType'
          }, {
            n: 'elseFilter',
            rq: true,
            en: 'ElseFilter',
            ti: '.ElseFilter'
          }, {
            n: 'minScaleDenominator',
            en: 'MinScaleDenominator',
            ti: 'Double'
          }, {
            n: 'maxScaleDenominator',
            en: 'MaxScaleDenominator',
            ti: 'Double'
          }, {
            n: 'symbolizer',
            rq: true,
            col: true,
            mx: false,
            dom: false,
            en: 'Symbolizer',
            ti: '.SymbolizerType',
            t: 'er'
          }]
      }, {
        ln: 'Stroke',
        tn: null,
        ps: [{
            n: 'graphicFill',
            rq: true,
            en: 'GraphicFill',
            ti: '.GraphicFill'
          }, {
            n: 'graphicStroke',
            rq: true,
            en: 'GraphicStroke',
            ti: '.GraphicStroke'
          }, {
            n: 'cssParameter',
            mno: 0,
            col: true,
            en: 'CssParameter',
            ti: '.CssParameter'
          }]
      }, {
        ln: 'GraphicFill',
        tn: null,
        ps: [{
            n: 'graphic',
            rq: true,
            en: 'Graphic',
            ti: '.Graphic'
          }]
      }, {
        ln: 'RemoteOWS',
        tn: null,
        ps: [{
            n: 'service',
            rq: true,
            en: 'Service'
          }, {
            n: 'onlineResource',
            rq: true,
            en: 'OnlineResource',
            ti: '.OnlineResource'
          }]
      }, {
        ln: 'LineSymbolizer',
        tn: null,
        bti: '.SymbolizerType',
        ps: [{
            n: 'geometry',
            en: 'Geometry',
            ti: '.Geometry'
          }, {
            n: 'stroke',
            en: 'Stroke',
            ti: '.Stroke'
          }]
      }, {
        ln: 'GraphicStroke',
        tn: null,
        ps: [{
            n: 'graphic',
            rq: true,
            en: 'Graphic',
            ti: '.Graphic'
          }]
      }, {
        ln: 'OnlineResource',
        tn: null,
        ps: [{
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'UserLayer',
        tn: null,
        ps: [{
            n: 'name',
            en: 'Name'
          }, {
            n: 'remoteOWS',
            en: 'RemoteOWS',
            ti: '.RemoteOWS'
          }, {
            n: 'layerFeatureConstraints',
            rq: true,
            en: 'LayerFeatureConstraints',
            ti: '.LayerFeatureConstraints'
          }, {
            n: 'userStyle',
            rq: true,
            col: true,
            en: 'UserStyle',
            ti: '.UserStyle'
          }]
      }, {
        ln: 'LegendGraphic',
        tn: null,
        ps: [{
            n: 'graphic',
            rq: true,
            en: 'Graphic',
            ti: '.Graphic'
          }]
      }, {
        ln: 'LabelPlacement',
        tn: null,
        ps: [{
            n: 'pointPlacement',
            rq: true,
            en: 'PointPlacement',
            ti: '.PointPlacement'
          }, {
            n: 'linePlacement',
            rq: true,
            en: 'LinePlacement',
            ti: '.LinePlacement'
          }]
      }, {
        ln: 'SelectedChannelType',
        ps: [{
            n: 'sourceChannelName',
            rq: true,
            en: 'SourceChannelName'
          }, {
            n: 'contrastEnhancement',
            en: 'ContrastEnhancement',
            ti: '.ContrastEnhancement'
          }]
      }, {
        ln: 'ColorMapEntry',
        tn: null,
        ps: [{
            n: 'color',
            rq: true,
            an: {
              lp: 'color'
            },
            t: 'a'
          }, {
            n: 'opacity',
            ti: 'Double',
            an: {
              lp: 'opacity'
            },
            t: 'a'
          }, {
            n: 'quantity',
            ti: 'Double',
            an: {
              lp: 'quantity'
            },
            t: 'a'
          }, {
            n: 'label',
            an: {
              lp: 'label'
            },
            t: 'a'
          }]
      }, {
        ln: 'ElseFilter',
        tn: null
      }, {
        ln: 'EARLIESTONTOP',
        tn: null
      }, {
        ln: 'OverlapBehavior',
        tn: null,
        ps: [{
            n: 'latestontop',
            rq: true,
            en: 'LATEST_ON_TOP',
            ti: '.LATESTONTOP'
          }, {
            n: 'earliestontop',
            rq: true,
            en: 'EARLIEST_ON_TOP',
            ti: '.EARLIESTONTOP'
          }, {
            n: 'average',
            rq: true,
            en: 'AVERAGE',
            ti: '.AVERAGE'
          }, {
            n: 'random',
            rq: true,
            en: 'RANDOM',
            ti: '.RANDOM'
          }]
      }, {
        ln: 'CssParameter',
        tn: null,
        bti: '.ParameterValueType',
        ps: [{
            n: 'name',
            rq: true,
            an: {
              lp: 'name'
            },
            t: 'a'
          }]
      }, {
        ln: 'Mark',
        tn: null,
        ps: [{
            n: 'wellKnownName',
            en: 'WellKnownName'
          }, {
            n: 'fill',
            en: 'Fill',
            ti: '.Fill'
          }, {
            n: 'stroke',
            en: 'Stroke',
            ti: '.Stroke'
          }]
      }, {
        ln: 'Displacement',
        tn: null,
        ps: [{
            n: 'displacementX',
            rq: true,
            en: 'DisplacementX',
            ti: '.ParameterValueType'
          }, {
            n: 'displacementY',
            rq: true,
            en: 'DisplacementY',
            ti: '.ParameterValueType'
          }]
      }, {
        ln: 'Normalize',
        tn: null
      }, {
        ln: 'ImageOutline',
        tn: null,
        ps: [{
            n: 'lineSymbolizer',
            rq: true,
            en: 'LineSymbolizer',
            ti: '.LineSymbolizer'
          }, {
            n: 'polygonSymbolizer',
            rq: true,
            en: 'PolygonSymbolizer',
            ti: '.PolygonSymbolizer'
          }]
      }, {
        ln: 'PolygonSymbolizer',
        tn: null,
        bti: '.SymbolizerType',
        ps: [{
            n: 'geometry',
            en: 'Geometry',
            ti: '.Geometry'
          }, {
            n: 'fill',
            en: 'Fill',
            ti: '.Fill'
          }, {
            n: 'stroke',
            en: 'Stroke',
            ti: '.Stroke'
          }]
      }, {
        ln: 'LayerFeatureConstraints',
        tn: null,
        ps: [{
            n: 'featureTypeConstraint',
            rq: true,
            col: true,
            en: 'FeatureTypeConstraint',
            ti: '.FeatureTypeConstraint'
          }]
      }, {
        ln: 'ColorMap',
        tn: null,
        ps: [{
            n: 'colorMapEntry',
            mno: 0,
            col: true,
            en: 'ColorMapEntry',
            ti: '.ColorMapEntry'
          }]
      }, {
        ln: 'Halo',
        tn: null,
        ps: [{
            n: 'radius',
            en: 'Radius',
            ti: '.ParameterValueType'
          }, {
            n: 'fill',
            en: 'Fill',
            ti: '.Fill'
          }]
      }, {
        ln: 'ShadedRelief',
        tn: null,
        ps: [{
            n: 'brightnessOnly',
            en: 'BrightnessOnly',
            ti: 'Boolean'
          }, {
            n: 'reliefFactor',
            en: 'ReliefFactor',
            ti: 'Double'
          }]
      }, {
        ln: 'ChannelSelection',
        tn: null,
        ps: [{
            n: 'redChannel',
            rq: true,
            en: 'RedChannel',
            ti: '.SelectedChannelType'
          }, {
            n: 'greenChannel',
            rq: true,
            en: 'GreenChannel',
            ti: '.SelectedChannelType'
          }, {
            n: 'blueChannel',
            rq: true,
            en: 'BlueChannel',
            ti: '.SelectedChannelType'
          }, {
            n: 'grayChannel',
            rq: true,
            en: 'GrayChannel',
            ti: '.SelectedChannelType'
          }]
      }, {
        ln: 'NamedLayer',
        tn: null,
        ps: [{
            n: 'name',
            rq: true,
            en: 'Name'
          }, {
            n: 'layerFeatureConstraints',
            en: 'LayerFeatureConstraints',
            ti: '.LayerFeatureConstraints'
          }, {
            n: 'namedStyleOrUserStyle',
            mno: 0,
            col: true,
            etis: [{
                en: 'NamedStyle',
                ti: '.NamedStyle'
              }, {
                en: 'UserStyle',
                ti: '.UserStyle'
              }],
            t: 'es'
          }]
      }, {
        ln: 'ContrastEnhancement',
        tn: null,
        ps: [{
            n: 'normalize',
            rq: true,
            en: 'Normalize',
            ti: '.Normalize'
          }, {
            n: 'histogram',
            rq: true,
            en: 'Histogram',
            ti: '.Histogram'
          }, {
            n: 'gammaValue',
            en: 'GammaValue',
            ti: 'Double'
          }]
      }, {
        ln: 'UserStyle',
        tn: null,
        ps: [{
            n: 'name',
            en: 'Name'
          }, {
            n: 'title',
            en: 'Title'
          }, {
            n: '_abstract',
            en: 'Abstract'
          }, {
            n: 'isDefault',
            en: 'IsDefault',
            ti: 'Boolean'
          }, {
            n: 'featureTypeStyle',
            rq: true,
            col: true,
            en: 'FeatureTypeStyle',
            ti: '.FeatureTypeStyle'
          }]
      }, {
        ln: 'SymbolizerType'
      }, {
        ln: 'TextSymbolizer',
        tn: null,
        bti: '.SymbolizerType',
        ps: [{
            n: 'geometry',
            en: 'Geometry',
            ti: '.Geometry'
          }, {
            n: 'label',
            en: 'Label',
            ti: '.ParameterValueType'
          }, {
            n: 'font',
            en: 'Font',
            ti: '.Font'
          }, {
            n: 'labelPlacement',
            en: 'LabelPlacement',
            ti: '.LabelPlacement'
          }, {
            n: 'halo',
            en: 'Halo',
            ti: '.Halo'
          }, {
            n: 'fill',
            en: 'Fill',
            ti: '.Fill'
          }]
      }, {
        ln: 'FeatureTypeConstraint',
        tn: null,
        ps: [{
            n: 'featureTypeName',
            en: 'FeatureTypeName'
          }, {
            n: 'filter',
            en: {
              lp: 'Filter',
              ns: 'http:\/\/www.opengis.net\/ogc'
            },
            ti: 'Filter_1_0_0.FilterType'
          }, {
            n: 'extent',
            mno: 0,
            col: true,
            en: 'Extent',
            ti: '.Extent'
          }]
      }, {
        ln: 'StyledLayerDescriptor',
        tn: null,
        ps: [{
            n: 'name',
            en: 'Name'
          }, {
            n: 'title',
            en: 'Title'
          }, {
            n: '_abstract',
            en: 'Abstract'
          }, {
            n: 'namedLayerOrUserLayer',
            mno: 0,
            col: true,
            etis: [{
                en: 'NamedLayer',
                ti: '.NamedLayer'
              }, {
                en: 'UserLayer',
                ti: '.UserLayer'
              }],
            t: 'es'
          }, {
            n: 'version',
            rq: true,
            an: {
              lp: 'version'
            },
            t: 'a'
          }]
      }, {
        ln: 'ExternalGraphic',
        tn: null,
        ps: [{
            n: 'onlineResource',
            rq: true,
            en: 'OnlineResource',
            ti: '.OnlineResource'
          }, {
            n: 'format',
            rq: true,
            en: 'Format'
          }]
      }, {
        ln: 'Geometry',
        tn: null,
        ps: [{
            n: 'propertyName',
            rq: true,
            en: {
              lp: 'PropertyName',
              ns: 'http:\/\/www.opengis.net\/ogc'
            },
            ti: 'Filter_1_0_0.PropertyNameType'
          }]
      }],
    eis: [{
        en: 'GreenChannel',
        ti: '.SelectedChannelType'
      }, {
        en: 'Font',
        ti: '.Font'
      }, {
        en: 'Format'
      }, {
        en: 'Service'
      }, {
        en: 'LabelPlacement',
        ti: '.LabelPlacement'
      }, {
        en: 'MinScaleDenominator',
        ti: 'Double'
      }, {
        en: 'Histogram',
        ti: '.Histogram'
      }, {
        en: 'ColorMap',
        ti: '.ColorMap'
      }, {
        en: 'SemanticTypeIdentifier'
      }, {
        en: 'ColorMapEntry',
        ti: '.ColorMapEntry'
      }, {
        en: 'GammaValue',
        ti: 'Double'
      }, {
        en: 'IsDefault',
        ti: 'Boolean'
      }, {
        en: 'LayerFeatureConstraints',
        ti: '.LayerFeatureConstraints'
      }, {
        en: 'Abstract'
      }, {
        en: 'AnchorPointX',
        ti: '.ParameterValueType'
      }, {
        en: 'FeatureTypeConstraint',
        ti: '.FeatureTypeConstraint'
      }, {
        en: 'FeatureTypeStyle',
        ti: '.FeatureTypeStyle'
      }, {
        en: 'Normalize',
        ti: '.Normalize'
      }, {
        en: 'Symbolizer',
        ti: '.SymbolizerType'
      }, {
        en: 'AnchorPoint',
        ti: '.AnchorPoint'
      }, {
        en: 'CssParameter',
        ti: '.CssParameter'
      }, {
        en: 'Opacity',
        ti: '.ParameterValueType'
      }, {
        en: 'GrayChannel',
        ti: '.SelectedChannelType'
      }, {
        en: 'MaxScaleDenominator',
        ti: 'Double'
      }, {
        en: 'AnchorPointY',
        ti: '.ParameterValueType'
      }, {
        en: 'ContrastEnhancement',
        ti: '.ContrastEnhancement'
      }, {
        en: 'ElseFilter',
        ti: '.ElseFilter'
      }, {
        en: 'PerpendicularOffset',
        ti: '.ParameterValueType'
      }, {
        en: 'Name'
      }, {
        en: 'ReliefFactor',
        ti: 'Double'
      }, {
        en: 'PointSymbolizer',
        ti: '.PointSymbolizer',
        sh: 'Symbolizer'
      }, {
        en: 'PolygonSymbolizer',
        ti: '.PolygonSymbolizer',
        sh: 'Symbolizer'
      }, {
        en: 'UserLayer',
        ti: '.UserLayer'
      }, {
        en: 'Halo',
        ti: '.Halo'
      }, {
        en: 'BrightnessOnly',
        ti: 'Boolean'
      }, {
        en: 'Displacement',
        ti: '.Displacement'
      }, {
        en: 'LATEST_ON_TOP',
        ti: '.LATESTONTOP'
      }, {
        en: 'SourceChannelName'
      }, {
        en: 'Value'
      }, {
        en: 'DisplacementX',
        ti: '.ParameterValueType'
      }, {
        en: 'AVERAGE',
        ti: '.AVERAGE'
      }, {
        en: 'RANDOM',
        ti: '.RANDOM'
      }, {
        en: 'Graphic',
        ti: '.Graphic'
      }, {
        en: 'TextSymbolizer',
        ti: '.TextSymbolizer',
        sh: 'Symbolizer'
      }, {
        en: 'Rotation',
        ti: '.ParameterValueType'
      }, {
        en: 'FeatureTypeName'
      }, {
        en: 'Stroke',
        ti: '.Stroke'
      }, {
        en: 'NamedStyle',
        ti: '.NamedStyle'
      }, {
        en: 'ChannelSelection',
        ti: '.ChannelSelection'
      }, {
        en: 'BlueChannel',
        ti: '.SelectedChannelType'
      }, {
        en: 'Size',
        ti: '.ParameterValueType'
      }, {
        en: 'Extent',
        ti: '.Extent'
      }, {
        en: 'ShadedRelief',
        ti: '.ShadedRelief'
      }, {
        en: 'Radius',
        ti: '.ParameterValueType'
      }, {
        en: 'EARLIEST_ON_TOP',
        ti: '.EARLIESTONTOP'
      }, {
        en: 'Title'
      }, {
        en: 'Fill',
        ti: '.Fill'
      }, {
        en: 'Rule',
        ti: '.Rule'
      }, {
        en: 'StyledLayerDescriptor',
        ti: '.StyledLayerDescriptor'
      }, {
        en: 'ImageOutline',
        ti: '.ImageOutline'
      }, {
        en: 'UserStyle',
        ti: '.UserStyle'
      }, {
        en: 'LinePlacement',
        ti: '.LinePlacement'
      }, {
        en: 'DisplacementY',
        ti: '.ParameterValueType'
      }, {
        en: 'LineSymbolizer',
        ti: '.LineSymbolizer',
        sh: 'Symbolizer'
      }, {
        en: 'OverlapBehavior',
        ti: '.OverlapBehavior'
      }, {
        en: 'RasterSymbolizer',
        ti: '.RasterSymbolizer',
        sh: 'Symbolizer'
      }, {
        en: 'RemoteOWS',
        ti: '.RemoteOWS'
      }, {
        en: 'RedChannel',
        ti: '.SelectedChannelType'
      }, {
        en: 'NamedLayer',
        ti: '.NamedLayer'
      }, {
        en: 'GraphicStroke',
        ti: '.GraphicStroke'
      }, {
        en: 'ExternalGraphic',
        ti: '.ExternalGraphic'
      }, {
        en: 'PointPlacement',
        ti: '.PointPlacement'
      }, {
        en: 'Mark',
        ti: '.Mark'
      }, {
        en: 'LegendGraphic',
        ti: '.LegendGraphic'
      }, {
        en: 'Label',
        ti: '.ParameterValueType'
      }, {
        en: 'Geometry',
        ti: '.Geometry'
      }, {
        en: 'WellKnownName'
      }, {
        en: 'GraphicFill',
        ti: '.GraphicFill'
      }, {
        en: 'OnlineResource',
        ti: '.OnlineResource'
      }]
  };
  return {
    SLD_1_0_0: SLD_1_0_0
  };
};
if (typeof define === 'function' && define.amd) {
  define([], SLD_1_0_0_Module_Factory);
}
else {
  var SLD_1_0_0_Module = SLD_1_0_0_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.SLD_1_0_0 = SLD_1_0_0_Module.SLD_1_0_0;
  }
  else {
    var SLD_1_0_0 = SLD_1_0_0_Module.SLD_1_0_0;
  }
}