/* eslint no-negated-condition: 0 */ //
import { AminoMsg, StdFee } from '@cosmjs/amino';
import type { OnHomePageHandler, Panel, OnRpcRequestHandler } from '@metamask/snaps-sdk';
import { panel, text, heading, copyable, divider, image, DialogType } from '@metamask/snaps-sdk';
import { SignDoc } from 'cosmjs-types/cosmos/tx/v1beta1/tx';
import Long from 'long';
import {
  addChain,
  getChainDetails,
  getAllChains,
  validateChain,
  validateChainId,
} from './chain';
import parser from './helpers/parser';
import { ChainInfo } from './types/wallet';
import { getChainPanel } from './ui/suggestChain';
import { generateWallet } from './wallet/wallet';
import DENOMS from './constants/denoms';
import BASE_DENOMS from './constants/base_denom';

const x = `<svg width='1034' height='1034' viewBox='0 0 1034 1034' fill='none' xmlns='http://www.w3.org/2000/svg'>
<g clip-path='url(#clip0_3_387)'>
<rect x='5' y='5' width='1024' height='1024' rx='180' fill='url(#paint0_linear_3_387)'/>
<g filter='url(#filter0_d_3_387)'>
<g filter='url(#filter1_d_3_387)'>
<path d='M881.03 631.922C881.03 765.377 722.297 819.609 525.209 819.609C328.122 819.609 167.078 765.377 167.078 631.922C167.078 498.466 326.966 390.476 524.054 390.476C721.142 390.476 881.03 498.702 881.03 631.922Z' fill='url(#paint1_linear_3_387)'/>
<path d='M877.935 631.922C877.935 697.086 839.32 743.105 775.711 773.011C711.982 802.973 623.549 816.514 525.209 816.514C426.871 816.514 337.854 802.973 273.543 773.006C209.341 743.09 170.173 697.064 170.173 631.922C170.173 566.53 209.343 507.018 273.391 463.716C337.423 420.427 426.044 393.57 524.054 393.57C622.062 393.57 710.684 420.485 774.716 463.804C838.766 507.136 877.935 566.649 877.935 631.922Z' stroke='url(#paint2_linear_3_387)' stroke-width='6.18897'/>
</g>
<g filter='url(#filter2_d_3_387)'>
<g filter='url(#filter3_bdi_3_387)'>
<path d='M844.809 341.36C844.809 271.096 788.894 214.035 720.041 214.035C681.224 214.035 646.566 232.191 623.692 260.485C592.5 253.412 559.228 249.403 524.801 249.403C490.374 249.403 457.103 253.176 425.911 260.485C402.806 232.191 368.148 214.035 329.562 214.035C260.708 214.035 204.794 271.096 204.794 341.36C204.794 364.467 210.801 385.924 221.198 404.551C211.263 426.244 205.949 449.351 205.949 473.401C205.949 597.19 348.739 697.399 524.801 697.399C700.863 697.399 843.654 597.19 843.654 473.401C843.654 449.351 838.339 426.244 828.404 404.551C838.801 385.924 844.809 364.467 844.809 341.36Z' fill='url(#paint3_linear_3_387)' shape-rendering='crispEdges'/>
<path d='M623.283 262.289L624.406 262.543L625.13 261.648C647.675 233.76 681.816 215.884 720.041 215.884C787.838 215.884 842.96 272.081 842.96 341.36C842.96 364.141 837.038 385.289 826.789 403.65L826.332 404.469L826.723 405.321C836.553 426.784 841.804 449.63 841.804 473.401C841.804 534.529 806.551 590.022 749.188 630.307C691.83 670.59 612.498 695.55 524.801 695.55C437.104 695.55 357.773 670.59 300.415 630.307C243.051 590.022 207.798 534.529 207.798 473.401C207.798 449.63 213.05 426.784 222.88 405.321L223.27 404.469L222.813 403.65C212.564 385.289 206.643 364.141 206.643 341.36C206.643 272.081 261.765 215.884 329.562 215.884C367.552 215.884 401.698 233.758 424.478 261.655L425.209 262.549L426.333 262.286C457.379 255.011 490.509 251.253 524.801 251.253C559.085 251.253 592.22 255.244 623.283 262.289Z' stroke='url(#paint4_linear_3_387)' stroke-width='3.69857' shape-rendering='crispEdges'/>
</g>
<g filter='url(#filter4_d_3_387)'>
<path d='M319.51 412.192C361.621 412.192 395.758 377.355 395.758 334.382C395.758 291.409 361.621 256.572 319.51 256.572C277.4 256.572 243.263 291.409 243.263 334.382C243.263 377.355 277.4 412.192 319.51 412.192Z' fill='url(#paint5_linear_3_387)'/>
<path d='M394.371 334.382C394.371 376.616 360.828 410.805 319.51 410.805C278.193 410.805 244.65 376.616 244.65 334.382C244.65 292.148 278.193 257.959 319.51 257.959C360.828 257.959 394.371 292.148 394.371 334.382Z' stroke='url(#paint6_linear_3_387)' stroke-width='2.77393'/>
</g>
<g filter='url(#filter5_d_3_387)'>
<path d='M726.353 412.192C768.463 412.192 802.6 377.355 802.6 334.382C802.6 291.409 768.463 256.572 726.353 256.572C684.243 256.572 650.106 291.409 650.106 334.382C650.106 377.355 684.243 412.192 726.353 412.192Z' fill='url(#paint7_linear_3_387)'/>
<path d='M801.213 334.382C801.213 376.616 767.671 410.805 726.353 410.805C685.035 410.805 651.493 376.616 651.493 334.382C651.493 292.148 685.035 257.959 726.353 257.959C767.671 257.959 801.213 292.148 801.213 334.382Z' stroke='url(#paint8_linear_3_387)' stroke-width='2.77393'/>
</g>
</g>
<g filter='url(#filter6_bd_3_387)'>
<path d='M278.797 810.438C295.201 810.438 308.14 795.819 306.292 779.314C299.591 720.839 271.172 594.221 146.172 518.062C-20.1853 416.673 111.515 765.639 111.515 765.639L77.0878 785.916C65.5352 792.754 70.3873 810.438 83.5573 810.438H278.797Z' fill='#32DA6D'/>
<path d='M278.797 810.438C295.201 810.438 308.14 795.819 306.292 779.314C299.591 720.839 271.172 594.221 146.172 518.062C-20.1853 416.673 111.515 765.639 111.515 765.639L77.0878 785.916C65.5352 792.754 70.3873 810.438 83.5573 810.438H278.797Z' fill='url(#paint9_linear_3_387)'/>
<path d='M111.515 765.639C114.41 764.546 114.409 764.545 114.409 764.543L114.404 764.532L114.387 764.486L114.318 764.301C114.256 764.136 114.164 763.889 114.043 763.563C113.801 762.911 113.443 761.943 112.983 760.683C112.063 758.163 110.734 754.477 109.101 749.818C105.834 740.5 101.35 727.299 96.489 711.772C86.7587 680.696 75.5444 640.405 69.5137 603.333C66.4979 584.794 64.7943 567.153 65.1935 551.922C65.5946 536.62 68.1127 524.112 73.2303 515.562C78.2005 507.257 85.6876 502.538 96.8799 502.685C108.375 502.835 123.939 508.135 144.562 520.704L144.562 520.705C268.345 596.123 296.558 721.546 303.217 779.666C304.86 794.37 293.318 807.344 278.797 807.344H83.5573C73.6171 807.344 69.7525 793.858 78.6604 788.582C78.6616 788.581 78.6628 788.58 78.664 788.579L113.085 768.305L115.33 766.983L114.41 764.546L111.515 765.639Z' stroke='url(#paint10_linear_3_387)' stroke-width='6.18897'/>
</g>
<g filter='url(#filter7_bd_3_387)'>
<path d='M775.218 810.438C760.431 810.438 748.878 795.819 750.496 779.314C756.272 721.075 782.15 594.221 894.904 518.062C1045.32 416.673 926.327 765.639 926.327 765.639L957.519 785.916C967.916 792.754 963.526 810.438 951.742 810.438H775.218Z' fill='#32DA6D'/>
<path d='M775.218 810.438C760.431 810.438 748.878 795.819 750.496 779.314C756.272 721.075 782.15 594.221 894.904 518.062C1045.32 416.673 926.327 765.639 926.327 765.639L957.519 785.916C967.916 792.754 963.526 810.438 951.742 810.438H775.218Z' fill='url(#paint11_linear_3_387)'/>
<path d='M926.327 765.639L923.398 764.64L922.62 766.92L924.64 768.233L955.818 788.502C955.821 788.504 955.824 788.505 955.826 788.507C959.698 791.059 960.974 795.723 959.94 800.017C958.901 804.329 955.808 807.344 951.742 807.344H775.218C762.653 807.344 752.097 794.718 753.575 779.618C759.324 721.657 785.052 595.995 896.636 520.626C915.277 508.061 929.252 502.833 939.484 502.685C944.53 502.612 948.639 503.773 952.018 505.885C955.414 508.006 958.248 511.198 960.549 515.446C965.198 524.03 967.484 536.585 967.853 551.916C968.219 567.172 966.682 584.832 963.959 603.38C958.514 640.471 948.382 680.775 939.591 711.855C935.199 727.384 931.148 740.588 928.196 749.908C926.72 754.567 925.519 758.255 924.688 760.775C924.272 762.035 923.949 763.004 923.73 763.656C923.62 763.982 923.537 764.229 923.481 764.394L923.418 764.58L923.403 764.626L923.399 764.637C923.398 764.639 923.398 764.64 926.327 765.639Z' stroke='url(#paint12_linear_3_387)' stroke-width='6.18897'/>
</g>
<path d='M319.648 348.128C327.305 348.128 333.511 341.794 333.511 333.981C333.511 326.168 327.305 319.834 319.648 319.834C311.992 319.834 305.785 326.168 305.785 333.981C305.785 341.794 311.992 348.128 319.648 348.128Z' fill='url(#paint13_linear_3_387)'/>
<path d='M726.107 348.128C733.764 348.128 739.97 341.794 739.97 333.981C739.97 326.168 733.764 319.834 726.107 319.834C718.451 319.834 712.244 326.168 712.244 333.981C712.244 341.794 718.451 348.128 726.107 348.128Z' fill='url(#paint14_linear_3_387)'/>
</g>
</g>
<rect x='2.5' y='2.5' width='1029' height='1029' rx='182.5' stroke='url(#paint15_linear_3_387)' stroke-width='5'/>
<defs>
<filter id='filter0_d_3_387' x='-10.96' y='187.693' width='1054.96' height='751.973' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'>
<feFlood flood-opacity='0' result='BackgroundImageFix'/>
<feColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha'/>
<feOffset dy='47'/>
<feGaussianBlur stdDeviation='36.5'/>
<feComposite in2='hardAlpha' operator='out'/>
<feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'/>
<feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_3_387'/>
<feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_3_387' result='shape'/>
</filter>
<filter id='filter1_d_3_387' x='141.188' y='371.058' width='765.732' height='480.913' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'>
<feFlood flood-opacity='0' result='BackgroundImageFix'/>
<feColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha'/>
<feOffset dy='6.47249'/>
<feGaussianBlur stdDeviation='12.945'/>
<feComposite in2='hardAlpha' operator='out'/>
<feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'/>
<feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_3_387'/>
<feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_3_387' result='shape'/>
</filter>
<filter id='filter2_d_3_387' x='131.794' y='188.035' width='786.015' height='629.364' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'>
<feFlood flood-opacity='0' result='BackgroundImageFix'/>
<feColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha'/>
<feOffset dy='47'/>
<feGaussianBlur stdDeviation='36.5'/>
<feComposite in2='hardAlpha' operator='out'/>
<feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'/>
<feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_3_387'/>
<feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_3_387' result='shape'/>
</filter>
<filter id='filter3_bdi_3_387' x='146.541' y='155.783' width='756.52' height='599.869' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'>
<feFlood flood-opacity='0' result='BackgroundImageFix'/>
<feGaussianBlur in='BackgroundImageFix' stdDeviation='29.1262'/>
<feComposite in2='SourceAlpha' operator='in' result='effect1_backgroundBlur_3_387'/>
<feColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha'/>
<feOffset dy='6.47249'/>
<feGaussianBlur stdDeviation='12.945'/>
<feComposite in2='hardAlpha' operator='out'/>
<feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'/>
<feBlend mode='normal' in2='effect1_backgroundBlur_3_387' result='effect2_dropShadow_3_387'/>
<feBlend mode='normal' in='SourceGraphic' in2='effect2_dropShadow_3_387' result='shape'/>
<feColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha'/>
<feOffset dy='12.945'/>
<feGaussianBlur stdDeviation='20.8044'/>
<feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1'/>
<feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'/>
<feBlend mode='normal' in2='shape' result='effect3_innerShadow_3_387'/>
</filter>
<filter id='filter4_d_3_387' x='194.257' y='214.963' width='250.507' height='253.632' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'>
<feFlood flood-opacity='0' result='BackgroundImageFix'/>
<feColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha'/>
<feOffset dy='7.39714'/>
<feGaussianBlur stdDeviation='24.503'/>
<feComposite in2='hardAlpha' operator='out'/>
<feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'/>
<feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_3_387'/>
<feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_3_387' result='shape'/>
</filter>
<filter id='filter5_d_3_387' x='601.1' y='214.963' width='250.507' height='253.632' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'>
<feFlood flood-opacity='0' result='BackgroundImageFix'/>
<feColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha'/>
<feOffset dy='7.39714'/>
<feGaussianBlur stdDeviation='24.503'/>
<feComposite in2='hardAlpha' operator='out'/>
<feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'/>
<feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_3_387'/>
<feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_3_387' result='shape'/>
</filter>
<filter id='filter6_bd_3_387' x='3.78905' y='441.334' width='360.931' height='427.356' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'>
<feFlood flood-opacity='0' result='BackgroundImageFix'/>
<feGaussianBlur in='BackgroundImageFix' stdDeviation='29.1262'/>
<feComposite in2='SourceAlpha' operator='in' result='effect1_backgroundBlur_3_387'/>
<feColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha'/>
<feOffset dy='6.47249'/>
<feGaussianBlur stdDeviation='12.945'/>
<feComposite in2='hardAlpha' operator='out'/>
<feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'/>
<feBlend mode='normal' in2='effect1_backgroundBlur_3_387' result='effect2_dropShadow_3_387'/>
<feBlend mode='normal' in='SourceGraphic' in2='effect2_dropShadow_3_387' result='shape'/>
</filter>
<filter id='filter7_bd_3_387' x='692.092' y='441.334' width='337.161' height='427.356' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'>
<feFlood flood-opacity='0' result='BackgroundImageFix'/>
<feGaussianBlur in='BackgroundImageFix' stdDeviation='29.1262'/>
<feComposite in2='SourceAlpha' operator='in' result='effect1_backgroundBlur_3_387'/>
<feColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha'/>
<feOffset dy='6.47249'/>
<feGaussianBlur stdDeviation='12.945'/>
<feComposite in2='hardAlpha' operator='out'/>
<feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'/>
<feBlend mode='normal' in2='effect1_backgroundBlur_3_387' result='effect2_dropShadow_3_387'/>
<feBlend mode='normal' in='SourceGraphic' in2='effect2_dropShadow_3_387' result='shape'/>
</filter>
<linearGradient id='paint0_linear_3_387' x1='986' y1='-81' x2='517' y2='1029' gradientUnits='userSpaceOnUse'>
<stop stop-color='#AC4BFF'/>
<stop offset='1' stop-color='#520C8E'/>
</linearGradient>
<linearGradient id='paint1_linear_3_387' x1='524.054' y1='390.476' x2='524.054' y2='819.608' gradientUnits='userSpaceOnUse'>
<stop stop-color='#4BAF74'/>
<stop offset='1' stop-color='#26824B'/>
</linearGradient>
<linearGradient id='paint2_linear_3_387' x1='524.054' y1='390.476' x2='524.054' y2='819.608' gradientUnits='userSpaceOnUse'>
<stop stop-color='white'/>
<stop offset='1' stop-color='#9B9B9B' stop-opacity='0'/>
</linearGradient>
<linearGradient id='paint3_linear_3_387' x1='538.691' y1='184.569' x2='524.801' y2='697.399' gradientUnits='userSpaceOnUse'>
<stop stop-color='#32DA6D'/>
<stop offset='1' stop-color='#209F4D' stop-opacity='0.81'/>
</linearGradient>
<linearGradient id='paint4_linear_3_387' x1='524.801' y1='214.035' x2='524.801' y2='697.399' gradientUnits='userSpaceOnUse'>
<stop stop-color='white'/>
<stop offset='1' stop-color='#9B9B9B' stop-opacity='0'/>
</linearGradient>
<linearGradient id='paint5_linear_3_387' x1='319.51' y1='256.572' x2='319.51' y2='412.192' gradientUnits='userSpaceOnUse'>
<stop stop-color='white'/>
<stop offset='1' stop-color='#C4C4C4'/>
</linearGradient>
<linearGradient id='paint6_linear_3_387' x1='319.51' y1='256.572' x2='319.51' y2='412.192' gradientUnits='userSpaceOnUse'>
<stop/>
<stop offset='1' stop-opacity='0'/>
</linearGradient>
<linearGradient id='paint7_linear_3_387' x1='726.353' y1='256.572' x2='726.353' y2='412.192' gradientUnits='userSpaceOnUse'>
<stop stop-color='white'/>
<stop offset='1' stop-color='#C4C4C4'/>
</linearGradient>
<linearGradient id='paint8_linear_3_387' x1='726.353' y1='256.572' x2='726.353' y2='412.192' gradientUnits='userSpaceOnUse'>
<stop/>
<stop offset='1' stop-opacity='0'/>
</linearGradient>
<linearGradient id='paint9_linear_3_387' x1='189.559' y1='480.637' x2='174.538' y2='809.995' gradientUnits='userSpaceOnUse'>
<stop stop-color='#32DA6D'/>
<stop offset='1' stop-color='#209F4D'/>
</linearGradient>
<linearGradient id='paint10_linear_3_387' x1='184.255' y1='499.587' x2='184.255' y2='810.438' gradientUnits='userSpaceOnUse'>
<stop stop-color='white'/>
<stop offset='1' stop-color='#9B9B9B' stop-opacity='0'/>
</linearGradient>
<linearGradient id='paint11_linear_3_387' x1='865.461' y1='480.637' x2='848.83' y2='809.84' gradientUnits='userSpaceOnUse'>
<stop stop-color='#32DA6D'/>
<stop offset='1' stop-color='#209F4D'/>
</linearGradient>
<linearGradient id='paint12_linear_3_387' x1='860.673' y1='499.587' x2='860.673' y2='810.438' gradientUnits='userSpaceOnUse'>
<stop stop-color='white'/>
<stop offset='1' stop-color='#9B9B9B' stop-opacity='0'/>
</linearGradient>
<linearGradient id='paint13_linear_3_387' x1='319.648' y1='319.834' x2='319.648' y2='348.128' gradientUnits='userSpaceOnUse'>
<stop stop-color='#0D0D0D'/>
<stop offset='1' stop-color='#6A6A6A'/>
</linearGradient>
<linearGradient id='paint14_linear_3_387' x1='726.107' y1='319.834' x2='726.107' y2='348.128' gradientUnits='userSpaceOnUse'>
<stop stop-color='#0D0D0D'/>
<stop offset='1' stop-color='#6A6A6A'/>
</linearGradient>
<linearGradient id='paint15_linear_3_387' x1='517' y1='5' x2='517' y2='1029' gradientUnits='userSpaceOnUse'>
<stop stop-color='white'/>
<stop offset='1' stop-color='#9B9B9B' stop-opacity='0'/>
</linearGradient>
<clipPath id='clip0_3_387'>
<rect x='5' y='5' width='1024' height='1024' rx='180' fill='white'/>
</clipPath>
</defs>
</svg>`;

export type RequestParams<T> = {
  readonly signDoc: T;
  readonly signerAddress: string;
  readonly isADR36?: boolean;
  readonly enableExtraEntropy?: boolean;
  readonly chainId?: string;
};

export type StdSignDoc = {
  readonly chain_id?: string;
  readonly chainId?: string;
  readonly account_number: string;
  readonly accountNumber?: string;
  readonly sequence: string;
  readonly fee: StdFee;
  readonly msgs: readonly AminoMsg[];
  readonly memo: string;
};

export const onHomePage: OnHomePageHandler = async () => {
  const chainId = 'cosmoshub-4';
  const chainDetails = await getChainDetails(chainId);
  const wallet = await generateWallet(chainDetails);
  const accounts = wallet.getAccounts();

  const osmosisChainId = 'osmosis-1';
  const ochainDetails = await getChainDetails(osmosisChainId);
  const owallet = await generateWallet(ochainDetails);
  const oaccounts = owallet.getAccounts();
  const panels:any = [];
  let ototal = 0;
  const odenom = DENOMS['uosmo'].coinDenom;
  const coinDecimals = DENOMS['uosmo'].coinDecimals;
  let activity = [];

  
  // return {content: panel([
  //   heading('Leap metamask snap'),
  //   text('Cosmos'),
  //   text(`${JSON.stringify(data)}`)
  // ]),
  // }

  let total = 0;
  // @ts-ignore
  const tokens =[];
  let balances = '';
  const denom = DENOMS['uatom'].coinDenom;
  let cosmosHubToUSD = 9.35;
  return fetch(`https://api.leapwallet.io/market/prices?tokens=cosmos&platform=COSMOS_HUB&currency=USD`)
  .then((response) => {
    return response.json()
  }).then((response) => {
    if(response && response.cosmos) {
      cosmosHubToUSD = response.cosmos;
    }
    return fetch(`https://leap-node-proxy.numia.xyz/cosmos-lcd/cosmos/bank/v1beta1/balances/${accounts[0].address}`)
  })
  .then((response) => {
    return response.json()
  }).then((response) => {
    balances = JSON.stringify(response)
    response.balances && response.balances.forEach((resp: any) => {
      const tokenDenom =  resp.denom;
      // @ts-ignore
      if(BASE_DENOMS[tokenDenom]) {
        tokens.push({
          // @ts-ignore
          baseDenom: BASE_DENOMS[tokenDenom],
          ...resp
        });
      }
      if(resp.amount && resp.denom === 'uatom') {
        total = total + Number(resp.amount || '0');
      }
    });
  })
  .then(() => {
    return fetch(`https://cosmoshub-api.lavenderfive.com/cosmos/tx/v1beta1/txs?pagination.limit=20&pagination.reverse=true&events=transfer.sender%3D%27${accounts[0].address}%27`)
  })
  .then((response) => {
    return response.json()
  }).then((response) => {
    // activity =  response;
    response.txs && response.txs.forEach((ac: any) => {

      const type = ac.body && ac.body.messages && ac.body.messages[0] && ac.body.messages[0]['@type']
      const amount = ac.auth_info && ac.auth_info.fee && ac.auth_info.fee.amount && ac.auth_info.fee.amount[0];

      if(type && amount) {
        activity.push({ type, amount });
      }
    });
  })
  .then(() => {
    const panels = [
      text(`Leapwallet [leapwallet](https://leapwallet.io)`),
      image({ value: x}),
      divider(),
      heading('CosmosHub'),
      copyable(accounts[0].address),
      heading('Balance'),
      heading(`$${((total/1000000) * cosmosHubToUSD).toFixed(2) } / ${(total/1000000)} ${denom} `),
      // @ts-ignore
      heading('TOKENS'),
    ];

    // @ts-ignore
    tokens.forEach((token) => {
      if(token.baseDenom) {
        const TokenDenom = token.baseDenom.baseDenom;
        // @ts-ignore
        const coinDenom = (DENOMS[TokenDenom] && DENOMS[TokenDenom].coinDenom);

        if (coinDenom) {
            // @ts-ignore
          const decimals = (DENOMS[TokenDenom] && DENOMS[TokenDenom].coinDecimals) || 6;
          const balance = (token.amount / (10 * decimals))
          panels.push(text(`${balance.toFixed(2)}  ${coinDenom}`));
        }
      }
    })
    panels.push(heading('ACTIVITY'));

    // @ts-ignore
    activity.forEach((token) => {
      if(token.amount && token.amount.denom) {
        const TokenDenom = token.amount.denom;
        // @ts-ignore
        const coinDenom = (DENOMS[TokenDenom] && DENOMS[TokenDenom].coinDenom);

        if (coinDenom) {
            // @ts-ignore
          const decimals = (DENOMS[TokenDenom] && DENOMS[TokenDenom].coinDecimals) || 6;
          const amount = (token.amount.amount / (10 * decimals))
          panels.push(text(`${token.type} -  ${amount.toFixed(2)}  ${coinDenom}`));
        }
      }
    })
    return {
      content: panel(panels)
    }
  })
  .catch((e) => {
    return {
      content: panel([
        heading('Leap metamask snap'),
        text(JSON.stringify(e.message)),
      ]),
    }
  })
  
};

/**
 * Handle incoming JSON-RPC requests, sent through `wallet_invokeSnap`.
 *
 * @param args - The request handler args as object.
 * @param args.origin - The origin of the request, e.g., the website that
 * invoked the snap.
 * @param args.request - A validated JSON-RPC request object.
 * @returns The result of `snap_dialog`.
 * @throws If the request method is not valid for this snap.
 */
export const onRpcRequest: OnRpcRequestHandler = async ({
  origin,
  request,
}): Promise<any> => {
  switch (request.method) {
    case 'signDirect': {
      const params: RequestParams<SignDoc> =
        request.params as unknown as RequestParams<SignDoc>;
      const panels = parser.parse(params.signDoc, origin, 'direct');
      const confirmed = await snap.request({
        method: 'snap_dialog',
        params: {
          type: DialogType.Confirmation,
          content: panel(panels),
        },
      });

      if (!confirmed) {
        throw new Error('User denied transaction');
      }

      const { signerAddress, signDoc } = params;
      await validateChainId(signDoc.chainId);
      const { low, high, unsigned } = signDoc.accountNumber;
      const chainDetails = await getChainDetails(signDoc.chainId);
      const wallet = await generateWallet(chainDetails);

      const accountNumber = new Long(low, high, unsigned);
      const sd = {
        bodyBytes: new Uint8Array(Object.values(signDoc.bodyBytes)),
        authInfoBytes: new Uint8Array(Object.values(signDoc.authInfoBytes)),
        chainId: signDoc.chainId,
        accountNumber,
      };
      const signResponse = await wallet.signDirect(signerAddress, sd);
      return signResponse;
    }

    case 'signAmino': {
      const params: RequestParams<StdSignDoc> =
        request.params as unknown as RequestParams<StdSignDoc>;
      const panels = parser.parse(params.signDoc, origin, 'amino');

      const confirmed = await snap.request({
        method: 'snap_dialog',
        params: {
          type: 'confirmation',
          content: panel(panels),
        },
      });
      if (!confirmed) {
        throw new Error('User denied transaction');
      }

      const { signerAddress, signDoc } = params;

      const receivedChainId =
        params.chainId || signDoc.chain_id || signDoc.chainId || '';

      if (!receivedChainId) {
        throw new Error('ChainId is mandatory params');
      }

      if (!params.isADR36) {
        await validateChainId(receivedChainId);
      }

      const chainDetails = await getChainDetails(receivedChainId);

      const wallet = await generateWallet(chainDetails);

      const defaultFee = signDoc.fee;
      const defaultMemo = signDoc.memo;

      const sortedSignDoc = {
        chain_id: receivedChainId,
        account_number: signDoc.account_number ?? signDoc.accountNumber,
        sequence: signDoc.sequence,
        fee: defaultFee,
        memo: defaultMemo,
        msgs: signDoc.msgs,
      };
      const signResponse = await wallet.signAmino(
        signerAddress,
        sortedSignDoc,
        {
          extraEntropy: !params.enableExtraEntropy
            ? false
            : params.enableExtraEntropy,
        },
      );
      return signResponse;
    }

    case 'getKey': {
      const { chainId } = request.params as { chainId: string };
      await validateChainId(chainId);
      const chainDetails = await getChainDetails(chainId);
      const wallet = await generateWallet(chainDetails);
      const accounts = wallet.getAccounts();
      return {
        address: accounts[0].address,
        algo: 'secp256k1',
        bech32Address: accounts[0].address,
        isNanoLedger: false,
        name: 'Cosmos',
        pubkey: new Uint8Array(Object.values(accounts[0].pubkey)),
      };
    }

    case 'suggestChain': {
      const { chainInfo } = request.params as unknown as {
        chainInfo: ChainInfo;
      };
      validateChain(chainInfo);
      const panels = getChainPanel(origin, chainInfo);
      const confirmed = await snap.request({
        method: 'snap_dialog',
        params: {
          type: 'confirmation',
          content: panel(panels),
        },
      });
      if (!confirmed) {
        throw new Error('User denied transaction');
      }

      await addChain(chainInfo);
      return { message: 'Successfully added chain', chainInfo };
    }

    case 'getSupportedChains': {
      return await getAllChains();
    }

    default:
      throw new Error('Method not found.');
  }
};
