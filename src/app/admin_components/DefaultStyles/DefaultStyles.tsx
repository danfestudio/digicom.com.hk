"use client";
import axios from '../../../axios/axios';
import { Trash2, XCircle } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import { v4 as uuidv4 } from 'uuid';

function DefaultStyles({ setShowDefaultStyles, setSectionsList, sectionsList }: {
    setShowDefaultStyles: React.Dispatch<React.SetStateAction<boolean>>,
    setSectionsList: React.Dispatch<React.SetStateAction<any>>,
    sectionsList: any
}) {


    const defaultStyleList = [
        {
            id: uuidv4(),
            name: "customStyle",
            type: "customStyle",
            components: [
                {
                    "id": uuidv4(),
                    "elements": [],
                    "styles": {
                        1440: {
                            "paddingTop": 0,
                            "paddingBottom": 0,
                            "paddingLeft": 0,
                            "paddingRight": 0,
                            "backgroundImage": "",
                            "backgroundColor": "#ffffff",
                            "backgroundRepeat": "no-repeat",
                            "backgroundPosition": "center",
                            "backgroundSize": "cover",
                            "height": 500,
                            "alignItems": "start",
                            "display": "flex",
                            "flexDirection": "column",
                            "justifyContent": "start",
                            "gap": 1
                        },
                        1024: {
                            "paddingTop": 0,
                            "paddingBottom": 0,
                            "paddingLeft": 0,
                            "paddingRight": 0,
                            "backgroundImage": "",
                            "backgroundColor": "#ffffff",
                            "backgroundRepeat": "no-repeat",
                            "backgroundPosition": "center",
                            "backgroundSize": "cover",
                            "height": 500,
                            "alignItems": "start",
                            "display": "flex",
                            "flexDirection": "column",
                            "justifyContent": "start",
                            "gap": 1
                        },
                        768: {
                            "paddingTop": 0,
                            "paddingBottom": 0,
                            "paddingLeft": 0,
                            "paddingRight": 0,
                            "backgroundImage": "",
                            "backgroundColor": "#ffffff",
                            "backgroundRepeat": "no-repeat",
                            "backgroundPosition": "center",
                            "backgroundSize": "cover",
                            "height": 500,
                            "alignItems": "start",
                            "display": "flex",
                            "flexDirection": "column",
                            "justifyContent": "start",
                            "gap": 1
                        },
                        425: {
                            "paddingTop": 0,
                            "paddingBottom": 0,
                            "paddingLeft": 0,
                            "paddingRight": 0,
                            "backgroundImage": "",
                            "backgroundColor": "#ffffff",
                            "backgroundRepeat": "no-repeat",
                            "backgroundPosition": "center",
                            "backgroundSize": "cover",
                            "height": 500,
                            "alignItems": "start",
                            "display": "flex",
                            "flexDirection": "column",
                            "justifyContent": "start",
                            "gap": 1
                        },
                        320: {
                            "paddingTop": 0,
                            "paddingBottom": 0,
                            "paddingLeft": 0,
                            "paddingRight": 0,
                            "backgroundImage": "",
                            "backgroundColor": "#ffffff",
                            "backgroundRepeat": "no-repeat",
                            "backgroundPosition": "center",
                            "backgroundSize": "cover",
                            "height": 500,
                            "alignItems": "start",
                            "display": "flex",
                            "flexDirection": "column",
                            "justifyContent": "start",
                            "gap": 1
                        },
                    },
                    "hasOverlay": false,
                    "overlayColor": "repeating-radial-gradient(ellipse at 54.751% 60.204%, rgba(255,255,255,0)  0%,black  100%)"
                }
            ],
            styles: {
                1440: {
                    name: "1440",
                },
                1024: {
                    name: "1024",
                },
                768: {
                    name: "768",
                },
                425: {
                    name: "425",
                },
                320: {
                    name: "320",
                },
            },
            image: "/blank.png",
        },
        {
            "id": uuidv4(),
            "name": "customStyle",
            "type": "customStyle",
            "components": [
                {
                    "id": uuidv4(),
                    "elements": [
                        {
                            "name": "text",
                            "image": "/text.png",
                            "id": uuidv4(),
                            "styles": {
                                "320": {
                                    "content": "Split Air Conditioner",
                                    "fontSize": "10",
                                    "textAlign": "center",
                                    "fontWeight": "600",
                                    "verticalAlign": "-",
                                    "lineHeightType": "custom",
                                    "marginTop": "0",
                                    "lineHeight": "31"
                                },
                                "425": {
                                    "content": "Split Air Conditioner",
                                    "fontSize": "10",
                                    "textAlign": "center",
                                    "fontWeight": "600",
                                    "verticalAlign": "-",
                                    "lineHeightType": "custom",
                                    "marginTop": "0",
                                    "lineHeight": "31"
                                },
                                "768": {
                                    "content": "Split Air Conditioner",
                                    "fontSize": "12",
                                    "textAlign": "center",
                                    "fontWeight": "600",
                                    "verticalAlign": "-",
                                    "lineHeightType": "custom",
                                    "marginTop": "0",
                                    "lineHeight": "31"
                                },
                                "1024": {
                                    "fontSize": "12",
                                    "textAlign": "center",
                                    "fontWeight": "600",
                                    "verticalAlign": "-",
                                    "lineHeightType": "custom",
                                    "marginTop": "0",
                                    "lineHeight": "31",
                                    "content": "Split Air Conditioner"
                                },
                                "1440": {
                                    "content": "Split Air Conditioner",
                                    "fontSize": "14",
                                    "textAlign": "center",
                                    "fontWeight": "600",
                                    "verticalAlign": "-",
                                    "lineHeightType": "custom",
                                    "marginTop": "0",
                                    "lineHeight": "31"
                                }
                            },
                            "content": "Split Air Conditioner"
                        },
                        {
                            "name": "text",
                            "image": "/text.png",
                            "id": uuidv4(),
                            "styles": {
                                "320": {
                                    "fontSize": "30",
                                    "fontWeight": "700",
                                    "textAlign": "center",
                                    "verticalAlign": "-",
                                    "hasBackground": false,
                                    "lineHeightType": "custom",
                                    "lineHeight": "37",
                                    "content": "INVERTER +"
                                },
                                "425": {
                                    "fontSize": "30",
                                    "fontWeight": "700",
                                    "textAlign": "center",
                                    "verticalAlign": "-",
                                    "hasBackground": false,
                                    "lineHeightType": "custom",
                                    "lineHeight": "37",
                                    "content": "INVERTER +"
                                },
                                "768": {
                                    "fontSize": "40",
                                    "fontWeight": "700",
                                    "textAlign": "center",
                                    "verticalAlign": "-",
                                    "hasBackground": false,
                                    "lineHeightType": "custom",
                                    "lineHeight": "37",
                                    "content": "INVERTER +"
                                },
                                "1024": {
                                    "fontSize": "40",
                                    "fontWeight": "700",
                                    "textAlign": "center",
                                    "verticalAlign": "-",
                                    "hasBackground": false,
                                    "lineHeightType": "custom",
                                    "lineHeight": "37",
                                    "content": "INVERTER +"
                                },
                                "1440": {
                                    "content": "INVERTER +",
                                    "fontSize": "48",
                                    "fontWeight": "700",
                                    "textAlign": "center",
                                    "verticalAlign": "-",
                                    "hasBackground": false,
                                    "lineHeightType": "custom",
                                    "lineHeight": "37"
                                }
                            },
                            "content": "INVERTER +"
                        },
                        {
                            "name": "image",
                            "image": "/image.png",
                            "id": uuidv4(),
                            "styles": {
                                "320": {
                                    "height": "15",
                                    "width": "100"
                                },
                                "425": {
                                    "height": "15",
                                    "width": "100"
                                },
                                "768": {
                                    "height": "15",
                                    "width": "170"
                                },
                                "1024": {
                                    "height": "15",
                                    "width": "170"
                                },
                                "1440": {
                                    "url": {
                                        "_id": "66347a755929cc25cdadd041",
                                        "folder": "65e6c37371caa6014a076ad2",
                                        "name": "111111.png",
                                        "file_details": {
                                            "fieldname": "files",
                                            "originalname": "111111.png",
                                            "encoding": "7bit",
                                            "mimetype": "image/png",
                                            "destination": "public/uploads/images",
                                            "filename": "1714715249579111111.png",
                                            "path": "public/uploads/images/1714715249579111111.png",
                                            "size": 708762
                                        },
                                        "path": "/images/1714715249579111111.png",
                                        "is_active": true,
                                        "is_deleted": false,
                                        "createdAt": "2024-05-03T05:47:33.104Z",
                                        "updatedAt": "2024-05-03T05:47:33.104Z"
                                    },
                                    "height": "30",
                                    "width": "170"
                                }
                            },
                            "url": {
                                "_id": "66347a755929cc25cdadd041",
                                "folder": "65e6c37371caa6014a076ad2",
                                "name": "111111.png",
                                "file_details": {
                                    "fieldname": "files",
                                    "originalname": "111111.png",
                                    "encoding": "7bit",
                                    "mimetype": "image/png",
                                    "destination": "public/uploads/images",
                                    "filename": "1714715249579111111.png",
                                    "path": "public/uploads/images/1714715249579111111.png",
                                    "size": 708762
                                },
                                "path": "/images/1714715249579111111.png",
                                "is_active": true,
                                "is_deleted": false,
                                "createdAt": "2024-05-03T05:47:33.104Z",
                                "updatedAt": "2024-05-03T05:47:33.104Z"
                            }
                        },
                        {
                            "name": "image",
                            "image": "/image.png",
                            "id": uuidv4(),
                            "styles": {
                                "320": {
                                    "width": "300",
                                    "height": "170"
                                },
                                "425": {
                                    "width": "300",
                                    "height": "170"
                                },
                                "768": {
                                    "width": "600",
                                    "height": "300"
                                },
                                "1024": {
                                    "width": "600",
                                    "height": "300"
                                },
                                "1440": {
                                    "url": {
                                        "_id": "66347a755929cc25cdadd043",
                                        "folder": "65e6c37371caa6014a076ad2",
                                        "name": "a.png",
                                        "file_details": {
                                            "fieldname": "files",
                                            "originalname": "a.png",
                                            "encoding": "7bit",
                                            "mimetype": "image/png",
                                            "destination": "public/uploads/images",
                                            "filename": "1714715249595a.png",
                                            "path": "public/uploads/images/1714715249595a.png",
                                            "size": 8472255
                                        },
                                        "path": "/images/1714715249595a.png",
                                        "is_active": true,
                                        "is_deleted": false,
                                        "createdAt": "2024-05-03T05:47:33.152Z",
                                        "updatedAt": "2024-05-03T05:47:33.152Z"
                                    },
                                    "width": "1000",
                                    "height": "410"
                                }
                            },
                            "url": {
                                "_id": "66347a755929cc25cdadd043",
                                "folder": "65e6c37371caa6014a076ad2",
                                "name": "a.png",
                                "file_details": {
                                    "fieldname": "files",
                                    "originalname": "a.png",
                                    "encoding": "7bit",
                                    "mimetype": "image/png",
                                    "destination": "public/uploads/images",
                                    "filename": "1714715249595a.png",
                                    "path": "public/uploads/images/1714715249595a.png",
                                    "size": 8472255
                                },
                                "path": "/images/1714715249595a.png",
                                "is_active": true,
                                "is_deleted": false,
                                "createdAt": "2024-05-03T05:47:33.152Z",
                                "updatedAt": "2024-05-03T05:47:33.152Z"
                            }
                        }
                    ],
                    "styles": {
                        "320": {
                            "flexDirection": "column",
                            "display": "flex",
                            "gridOverflow": "overflow-visible",
                            "gridWidth": 500,
                            "gridWidthType": "container",
                            "contentPlacement": "mx-auto",
                            "gridHeightType": "fit-content",
                            "radiusTopLeft": 0,
                            "radiusTopRight": 0,
                            "radiusBottomLeft": 0,
                            "radiusBottomRight": 0,
                            "paddingTop": 0,
                            "paddingBottom": 0,
                            "paddingLeft": 0,
                            "paddingRight": 0,
                            "borderTop": 0,
                            "borderBottom": 0,
                            "borderLeft": 0,
                            "borderRight": 0,
                            "backgroundImage": "",
                            "backgroundColor": "#ffffff",
                            "hasBackground": true,
                            "backgroundRepeat": "no-repeat",
                            "backgroundPosition": "center",
                            "backgroundSize": "cover",
                            "rowSpan": "1",
                            "columnSpan": "1",
                            "gap": 1,
                            "height": 500,
                            "alignItems": "start",
                            "justifyContent": "center"
                        },
                        "425": {
                            "flexDirection": "column",
                            "display": "flex",
                            "gridOverflow": "overflow-visible",
                            "gridWidth": 500,
                            "gridWidthType": "container",
                            "contentPlacement": "mx-auto",
                            "gridHeightType": "fit-content",
                            "radiusTopLeft": 0,
                            "radiusTopRight": 0,
                            "radiusBottomLeft": 0,
                            "radiusBottomRight": 0,
                            "paddingTop": 0,
                            "paddingBottom": 0,
                            "paddingLeft": 0,
                            "paddingRight": 0,
                            "borderTop": 0,
                            "borderBottom": 0,
                            "borderLeft": 0,
                            "borderRight": 0,
                            "backgroundImage": "",
                            "backgroundColor": "#ffffff",
                            "hasBackground": true,
                            "backgroundRepeat": "no-repeat",
                            "backgroundPosition": "center",
                            "backgroundSize": "cover",
                            "rowSpan": "1",
                            "columnSpan": "1",
                            "gap": 1,
                            "height": 500,
                            "alignItems": "start",
                            "justifyContent": "center"
                        },
                        "768": {
                            "flexDirection": "column",
                            "display": "flex",
                            "gridOverflow": "overflow-visible",
                            "gridWidth": 500,
                            "gridWidthType": "container",
                            "contentPlacement": "mx-auto",
                            "gridHeightType": "100vh",
                            "radiusTopLeft": 0,
                            "radiusTopRight": 0,
                            "radiusBottomLeft": 0,
                            "radiusBottomRight": 0,
                            "paddingTop": 0,
                            "paddingBottom": 0,
                            "paddingLeft": 0,
                            "paddingRight": 0,
                            "borderTop": 0,
                            "borderBottom": 0,
                            "borderLeft": 0,
                            "borderRight": 0,
                            "backgroundImage": "",
                            "backgroundColor": "#ffffff",
                            "hasBackground": true,
                            "backgroundRepeat": "no-repeat",
                            "backgroundPosition": "center",
                            "backgroundSize": "cover",
                            "rowSpan": "1",
                            "columnSpan": "1",
                            "gap": 1,
                            "height": 500,
                            "alignItems": "start",
                            "justifyContent": "center"
                        },
                        "1024": {
                            "flexDirection": "column",
                            "display": "flex",
                            "gridOverflow": "overflow-visible",
                            "gridWidth": 500,
                            "gridWidthType": "container",
                            "contentPlacement": "mx-auto",
                            "gridHeightType": "100vh",
                            "radiusTopLeft": 0,
                            "radiusTopRight": 0,
                            "radiusBottomLeft": 0,
                            "radiusBottomRight": 0,
                            "paddingTop": 0,
                            "paddingBottom": 0,
                            "paddingLeft": 0,
                            "paddingRight": 0,
                            "borderTop": 0,
                            "borderBottom": 0,
                            "borderLeft": 0,
                            "borderRight": 0,
                            "backgroundImage": "",
                            "backgroundColor": "#ffffff",
                            "hasBackground": true,
                            "backgroundRepeat": "no-repeat",
                            "backgroundPosition": "center",
                            "backgroundSize": "cover",
                            "rowSpan": "1",
                            "columnSpan": "1",
                            "gap": 1,
                            "height": 500,
                            "alignItems": "start",
                            "justifyContent": "center"
                        },
                        "1440": {
                            "flexDirection": "column",
                            "display": "flex",
                            "gridOverflow": "overflow-visible",
                            "gridWidth": 500,
                            "gridWidthType": "container",
                            "contentPlacement": "mx-auto",
                            "gridHeightType": "100vh",
                            "radiusTopLeft": 0,
                            "radiusTopRight": 0,
                            "radiusBottomLeft": 0,
                            "radiusBottomRight": 0,
                            "paddingTop": 0,
                            "paddingBottom": 0,
                            "paddingLeft": 0,
                            "paddingRight": 0,
                            "borderTop": 0,
                            "borderBottom": 0,
                            "borderLeft": 0,
                            "borderRight": 0,
                            "backgroundImage": "",
                            "backgroundColor": "#ffffff",
                            "hasBackground": true,
                            "backgroundRepeat": "no-repeat",
                            "backgroundPosition": "center",
                            "backgroundSize": "cover",
                            "rowSpan": "1",
                            "columnSpan": "1",
                            "gap": 1,
                            "height": 500,
                            "alignItems": "start",
                            "justifyContent": "center"
                        }
                    },
                    "hasOverlay": false,
                    "overlayColor": "repeating-radial-gradient(ellipse at 54.751% 60.204%, rgba(255,255,255,0)  0%,black  100%)"
                }
            ],
            "styles": {
                "320": {
                    "name": "1440",
                    "gridHeightType": "100vh",
                    "hasBackground": false,
                    "backgroundImage": "",
                    "height": 500,
                    "contentWidth": "max-w-md",
                    "paddingTop": "30",
                    "paddingBottom": "30",
                    "marginTop": "0"
                },
                "425": {
                    "name": "1440",
                    "gridHeightType": "100vh",
                    "hasBackground": false,
                    "backgroundImage": "",
                    "height": 500,
                    "contentWidth": "max-w-md",
                    "paddingTop": "30",
                    "paddingBottom": "30",
                    "marginTop": "0"
                },
                "768": {
                    "name": "1440",
                    "gridHeightType": "100vh",
                    "hasBackground": false,
                    "backgroundImage": "",
                    "height": 500,
                    "contentWidth": "max-w-2xl",
                    "paddingTop": "30",
                    "paddingBottom": "30",
                    "marginTop": "0"
                },
                "1024": {
                    "name": "1440",
                    "gridHeightType": "100vh",
                    "hasBackground": false,
                    "backgroundImage": "",
                    "height": 500,
                    "contentWidth": "max-w-4xl",
                    "paddingTop": "40",
                    "paddingBottom": "40",
                    "marginTop": "0"
                },
                "1440": {
                    "name": "1440",
                    "gridHeightType": "100vh",
                    "hasBackground": false,
                    "backgroundImage": "",
                    "height": 500,
                    "contentWidth": "max-w-7xl",
                    "paddingTop": "50",
                    "paddingBottom": "50",
                    "marginTop": "0"
                }
            },
            "image": "/hero.png",
            "gridLayout": 1
        },
        {
            "id": uuidv4(),
            "name": "customStyle",
            "type": "customStyle",
            "components": [
                {
                    "id": uuidv4(),
                    "elements": [
                        {
                            "name": "text",
                            "image": "/text.png",
                            "id": uuidv4(),
                            "styles": {
                                "320": {
                                    "content": "TOP FEATURES",
                                    "textAlign": "center",
                                    "fontSize": "25",
                                    "fontWeight": "700",
                                    "verticalAlign": "center",
                                    "color": "#ffffff"
                                },
                                "425": {
                                    "content": "TOP FEATURES",
                                    "textAlign": "center",
                                    "fontSize": "25",
                                    "fontWeight": "700",
                                    "verticalAlign": "center",
                                    "color": "#ffffff"
                                },
                                "768": {
                                    "content": "TOP FEATURES",
                                    "textAlign": "center",
                                    "fontSize": "30",
                                    "fontWeight": "700",
                                    "verticalAlign": "center",
                                    "color": "#ffffff"
                                },
                                "1024": {
                                    "content": "TOP FEATURES",
                                    "textAlign": "center",
                                    "fontSize": "35",
                                    "fontWeight": "700",
                                    "verticalAlign": "center",
                                    "color": "#ffffff"
                                },
                                "1440": {
                                    "content": "TOP FEATURES",
                                    "textAlign": "center",
                                    "fontSize": "35",
                                    "fontWeight": "700",
                                    "verticalAlign": "center",
                                    "color": "#ffffff"
                                }
                            },
                            "content": "TOP FEATURES"
                        }
                    ],
                    "styles": {
                        "320": {
                            "flexDirection": "column",
                            "display": "flex",
                            "gridOverflow": "overflow-visible",
                            "gridWidth": 500,
                            "gridWidthType": "custom",
                            "contentPlacement": "mx-auto",
                            "gridHeightType": "fit-content",
                            "radiusTopLeft": 0,
                            "radiusTopRight": 0,
                            "radiusBottomLeft": 0,
                            "radiusBottomRight": 0,
                            "paddingTop": 0,
                            "paddingBottom": 0,
                            "paddingLeft": 0,
                            "paddingRight": 0,
                            "borderTop": 0,
                            "borderBottom": 0,
                            "borderLeft": 0,
                            "borderRight": 0,
                            "backgroundColor": "",
                            "hasBackground": false,
                            "backgroundRepeat": "no-repeat",
                            "backgroundPosition": "center",
                            "backgroundSize": "cover",
                            "rowSpan": "1",
                            "columnSpan": "3",
                            "gap": 1,
                            "height": 80,
                            "alignItems": "start",
                            "justifyContent": "start"
                        },
                        "425": {
                            "flexDirection": "column",
                            "display": "flex",
                            "gridOverflow": "overflow-visible",
                            "gridWidth": 500,
                            "gridWidthType": "custom",
                            "contentPlacement": "mx-auto",
                            "gridHeightType": "fit-content",
                            "radiusTopLeft": 0,
                            "radiusTopRight": 0,
                            "radiusBottomLeft": 0,
                            "radiusBottomRight": 0,
                            "paddingTop": 0,
                            "paddingBottom": 0,
                            "paddingLeft": 0,
                            "paddingRight": 0,
                            "borderTop": 0,
                            "borderBottom": 0,
                            "borderLeft": 0,
                            "borderRight": 0,
                            "backgroundColor": "",
                            "hasBackground": false,
                            "backgroundRepeat": "no-repeat",
                            "backgroundPosition": "center",
                            "backgroundSize": "cover",
                            "rowSpan": "1",
                            "columnSpan": "3",
                            "gap": 1,
                            "height": 80,
                            "alignItems": "start",
                            "justifyContent": "start"
                        },
                        "768": {
                            "flexDirection": "column",
                            "display": "flex",
                            "gridOverflow": "overflow-visible",
                            "gridWidth": 500,
                            "gridWidthType": "custom",
                            "contentPlacement": "mx-auto",
                            "gridHeightType": "fit-content",
                            "radiusTopLeft": 0,
                            "radiusTopRight": 0,
                            "radiusBottomLeft": 0,
                            "radiusBottomRight": 0,
                            "paddingTop": 0,
                            "paddingBottom": 0,
                            "paddingLeft": 0,
                            "paddingRight": 0,
                            "borderTop": 0,
                            "borderBottom": 0,
                            "borderLeft": 0,
                            "borderRight": 0,
                            "backgroundColor": "",
                            "hasBackground": false,
                            "backgroundRepeat": "no-repeat",
                            "backgroundPosition": "center",
                            "backgroundSize": "cover",
                            "rowSpan": "1",
                            "columnSpan": "4",
                            "gap": 1,
                            "height": 80,
                            "alignItems": "start",
                            "justifyContent": "start"
                        },
                        "1024": {
                            "flexDirection": "column",
                            "display": "flex",
                            "gridOverflow": "overflow-visible",
                            "gridWidth": 500,
                            "gridWidthType": "custom",
                            "contentPlacement": "mx-auto",
                            "gridHeightType": "fit-content",
                            "radiusTopLeft": 0,
                            "radiusTopRight": 0,
                            "radiusBottomLeft": 0,
                            "radiusBottomRight": 0,
                            "paddingTop": 0,
                            "paddingBottom": 0,
                            "paddingLeft": 0,
                            "paddingRight": 0,
                            "borderTop": 0,
                            "borderBottom": 0,
                            "borderLeft": 0,
                            "borderRight": 0,
                            "backgroundColor": "",
                            "hasBackground": false,
                            "backgroundRepeat": "no-repeat",
                            "backgroundPosition": "center",
                            "backgroundSize": "cover",
                            "rowSpan": "1",
                            "columnSpan": "5",
                            "gap": 1,
                            "height": 80,
                            "alignItems": "start",
                            "justifyContent": "start"
                        },
                        "1440": {
                            "flexDirection": "column",
                            "display": "flex",
                            "gridOverflow": "overflow-visible",
                            "gridWidth": 500,
                            "gridWidthType": "custom",
                            "contentPlacement": "mx-auto",
                            "gridHeightType": "fit-content",
                            "radiusTopLeft": 0,
                            "radiusTopRight": 0,
                            "radiusBottomLeft": 0,
                            "radiusBottomRight": 0,
                            "paddingTop": 0,
                            "paddingBottom": 0,
                            "paddingLeft": 0,
                            "paddingRight": 0,
                            "borderTop": 0,
                            "borderBottom": 0,
                            "borderLeft": 0,
                            "borderRight": 0,
                            "backgroundColor": "",
                            "hasBackground": false,
                            "backgroundRepeat": "no-repeat",
                            "backgroundPosition": "center",
                            "backgroundSize": "cover",
                            "rowSpan": "1",
                            "columnSpan": "5",
                            "gap": 1,
                            "height": 80,
                            "alignItems": "start",
                            "justifyContent": "start"
                        }
                    },
                    "hasOverlay": false,
                    "overlayColor": ""
                },
                {
                    "id": uuidv4(),
                    "elements": [
                        {
                            "name": "image",
                            "image": "/image.png",
                            "id": uuidv4(),
                            "styles": {
                                "320": {
                                    "height": "50",
                                    "width": "50",
                                    "verticalAlign": "-",
                                    "imgPlacement": "center",
                                    "marginTop": "0",
                                    "marginBottom": "0"
                                },
                                "425": {
                                    "height": "60",
                                    "width": "60",
                                    "verticalAlign": "-",
                                    "imgPlacement": "center",
                                    "marginTop": "0",
                                    "marginBottom": "0"
                                },
                                "768": {
                                    "height": "70",
                                    "width": "70",
                                    "verticalAlign": "-",
                                    "imgPlacement": "center",
                                    "marginTop": "0",
                                    "marginBottom": "0"
                                },
                                "1024": {
                                    "height": "80",
                                    "width": "80",
                                    "verticalAlign": "-",
                                    "imgPlacement": "center",
                                    "marginTop": "0",
                                    "marginBottom": "0"
                                },
                                "1440": {
                                    "url": {
                                        "_id": "66347a885929cc25cdadd054",
                                        "folder": "65e6c37371caa6014a076ad2",
                                        "name": "Group408.png",
                                        "file_details": {
                                            "fieldname": "files",
                                            "originalname": "Group408.png",
                                            "encoding": "7bit",
                                            "mimetype": "image/png",
                                            "destination": "public/uploads/images",
                                            "filename": "1714715271473Group408.png",
                                            "path": "public/uploads/images/1714715271473Group408.png",
                                            "size": 548584
                                        },
                                        "path": "/images/1714715271473Group408.png",
                                        "is_active": true,
                                        "is_deleted": false,
                                        "createdAt": "2024-05-03T05:47:52.071Z",
                                        "updatedAt": "2024-05-03T05:47:52.071Z"
                                    },
                                    "height": "120",
                                    "width": "120",
                                    "verticalAlign": "-",
                                    "imgPlacement": "center",
                                    "marginTop": "0",
                                    "marginBottom": "0"
                                }
                            },
                            "url": {
                                "_id": "66347a885929cc25cdadd054",
                                "folder": "65e6c37371caa6014a076ad2",
                                "name": "Group408.png",
                                "file_details": {
                                    "fieldname": "files",
                                    "originalname": "Group408.png",
                                    "encoding": "7bit",
                                    "mimetype": "image/png",
                                    "destination": "public/uploads/images",
                                    "filename": "1714715271473Group408.png",
                                    "path": "public/uploads/images/1714715271473Group408.png",
                                    "size": 548584
                                },
                                "path": "/images/1714715271473Group408.png",
                                "is_active": true,
                                "is_deleted": false,
                                "createdAt": "2024-05-03T05:47:52.071Z",
                                "updatedAt": "2024-05-03T05:47:52.071Z"
                            }
                        },
                        {
                            "name": "text",
                            "image": "/text.png",
                            "id": uuidv4(),
                            "styles": {
                                "320": {
                                    "content": "8 WAY \nAIR\nVENTS",
                                    "fontSize": "16",
                                    "fontWeight": "700",
                                    "lineHeightType": "custom",
                                    "lineHeight": "20",
                                    "verticalAlign": "-",
                                    "textAlign": "start",
                                    "paddingBottom": "0",
                                    "paddingLeft": "10"
                                },
                                "425": {
                                    "content": "8 WAY AIR\nVENTS",
                                    "fontSize": "18",
                                    "fontWeight": "700",
                                    "lineHeightType": "custom",
                                    "lineHeight": "20",
                                    "verticalAlign": "-",
                                    "textAlign": "start",
                                    "paddingBottom": "0",
                                    "paddingLeft": "10"
                                },
                                "768": {
                                    "content": "8 WAY AIR\nVENTS",
                                    "fontSize": "20",
                                    "fontWeight": "700",
                                    "lineHeightType": "custom",
                                    "lineHeight": "22",
                                    "verticalAlign": "-",
                                    "textAlign": "start",
                                    "paddingBottom": "0",
                                    "paddingLeft": "20"
                                },
                                "1024": {
                                    "content": "8 WAY AIR\nVENTS",
                                    "fontSize": "23",
                                    "fontWeight": "700",
                                    "lineHeightType": "custom",
                                    "lineHeight": "24",
                                    "verticalAlign": "-",
                                    "textAlign": "start",
                                    "paddingBottom": "0",
                                    "paddingLeft": "20"
                                },
                                "1440": {
                                    "content": "8 WAY AIR\nVENTS",
                                    "fontSize": "25",
                                    "fontWeight": "700",
                                    "lineHeightType": "custom",
                                    "lineHeight": "24",
                                    "verticalAlign": "-",
                                    "textAlign": "start",
                                    "paddingBottom": "0",
                                    "paddingLeft": "20"
                                }
                            },
                            "content": "FRESH & CLEAN\nAIR FLOW"
                        },
                        {
                            "name": "text",
                            "image": "/text.png",
                            "id": uuidv4(),
                            "styles": {
                                "320": {
                                    "content": "Fresh & Clean \nAir Flow in the\nroom.",
                                    "fontSize": "9",
                                    "fontWeight": "500",
                                    "lineHeightType": "custom",
                                    "lineHeight": "15",
                                    "paddingLeft": "10"
                                },
                                "425": {
                                    "paddingLeft": "10",
                                    "content": "Fresh & Clean Air \nFlow in the room.",
                                    "fontSize": "11",
                                    "lineHeight": "15",
                                    "fontWeight": "500",
                                    "lineHeightType": "custom"
                                },
                                "768": {
                                    "content": "Fresh & Clean Air \nFlow in the room.",
                                    "fontSize": "12",
                                    "fontWeight": "500",
                                    "lineHeightType": "custom",
                                    "lineHeight": "17",
                                    "paddingLeft": "20"
                                },
                                "1024": {
                                    "content": "Fresh & Clean Air \nFlow in the room.",
                                    "fontSize": "12",
                                    "fontWeight": "500",
                                    "lineHeightType": "custom",
                                    "lineHeight": "20",
                                    "paddingLeft": "20"
                                },
                                "1440": {
                                    "content": "Fresh & Clean Air Flow\nin the room.",
                                    "fontSize": "15",
                                    "fontWeight": "500",
                                    "lineHeightType": "custom",
                                    "lineHeight": "20",
                                    "paddingLeft": "20"
                                }
                            },
                            "content": "Fresh & Clean Air Flow\nin the room."
                        }
                    ],
                    "styles": {
                        "320": {
                            "flexDirection": "column",
                            "display": "flex",
                            "gridOverflow": "overflow-visible",
                            "gridWidth": 500,
                            "gridWidthType": "custom",
                            "contentPlacement": "mx-auto",
                            "gridHeightType": "custom",
                            "radiusTopLeft": 10,
                            "radiusTopRight": 10,
                            "radiusBottomLeft": 10,
                            "radiusBottomRight": 10,
                            "paddingTop": 0,
                            "paddingBottom": 0,
                            "paddingLeft": "0",
                            "paddingRight": "0",
                            "borderTop": 0,
                            "borderBottom": 0,
                            "borderLeft": 0,
                            "borderRight": 0,
                            "backgroundColor": "#ffffff",
                            "hasBackground": true,
                            "backgroundRepeat": "no-repeat",
                            "backgroundPosition": "center",
                            "backgroundSize": "cover",
                            "rowSpan": "2",
                            "columnSpan": "1",
                            "gap": 5,
                            "height": 210,
                            "alignItems": "start",
                            "justifyContent": "center"
                        },
                        "425": {
                            "flexDirection": "column",
                            "display": "flex",
                            "gridOverflow": "overflow-visible",
                            "gridWidth": 500,
                            "gridWidthType": "custom",
                            "contentPlacement": "mx-auto",
                            "gridHeightType": "custom",
                            "radiusTopLeft": 15,
                            "radiusTopRight": 15,
                            "radiusBottomLeft": 15,
                            "radiusBottomRight": 15,
                            "paddingTop": 0,
                            "paddingBottom": 0,
                            "paddingLeft": "0",
                            "paddingRight": "0",
                            "borderTop": 0,
                            "borderBottom": 0,
                            "borderLeft": 0,
                            "borderRight": 0,
                            "backgroundColor": "#ffffff",
                            "hasBackground": true,
                            "backgroundRepeat": "no-repeat",
                            "backgroundPosition": "center",
                            "backgroundSize": "cover",
                            "rowSpan": "2",
                            "columnSpan": "1",
                            "gap": 15,
                            "height": 265,
                            "alignItems": "start",
                            "justifyContent": "center"
                        },
                        "768": {
                            "flexDirection": "column",
                            "display": "flex",
                            "gridOverflow": "overflow-visible",
                            "gridWidth": 500,
                            "gridWidthType": "custom",
                            "contentPlacement": "mx-auto",
                            "gridHeightType": "custom",
                            "radiusTopLeft": 20,
                            "radiusTopRight": 20,
                            "radiusBottomLeft": 20,
                            "radiusBottomRight": 20,
                            "paddingTop": 0,
                            "paddingBottom": 0,
                            "paddingLeft": "0",
                            "paddingRight": "0",
                            "borderTop": 0,
                            "borderBottom": 0,
                            "borderLeft": 0,
                            "borderRight": 0,
                            "backgroundColor": "#ffffff",
                            "hasBackground": true,
                            "backgroundRepeat": "no-repeat",
                            "backgroundPosition": "center",
                            "backgroundSize": "cover",
                            "rowSpan": "2",
                            "columnSpan": "1",
                            "gap": 15,
                            "height": 340,
                            "alignItems": "start",
                            "justifyContent": "center"
                        },
                        "1024": {
                            "flexDirection": "column",
                            "display": "flex",
                            "gridOverflow": "overflow-visible",
                            "gridWidth": 500,
                            "gridWidthType": "custom",
                            "contentPlacement": "mx-auto",
                            "gridHeightType": "custom",
                            "radiusTopLeft": 20,
                            "radiusTopRight": 20,
                            "radiusBottomLeft": 20,
                            "radiusBottomRight": 20,
                            "paddingTop": 0,
                            "paddingBottom": 0,
                            "paddingLeft": "0",
                            "paddingRight": "0",
                            "borderTop": 0,
                            "borderBottom": 0,
                            "borderLeft": 0,
                            "borderRight": 0,
                            "backgroundColor": "#ffffff",
                            "hasBackground": true,
                            "backgroundRepeat": "no-repeat",
                            "backgroundPosition": "center",
                            "backgroundSize": "cover",
                            "rowSpan": "2",
                            "columnSpan": "1",
                            "gap": 15,
                            "height": 370,
                            "alignItems": "start",
                            "justifyContent": "center"
                        },
                        "1440": {
                            "flexDirection": "column",
                            "display": "flex",
                            "gridOverflow": "overflow-visible",
                            "gridWidth": 500,
                            "gridWidthType": "custom",
                            "contentPlacement": "mx-auto",
                            "gridHeightType": "custom",
                            "radiusTopLeft": 30,
                            "radiusTopRight": 30,
                            "radiusBottomLeft": 30,
                            "radiusBottomRight": 30,
                            "paddingTop": 0,
                            "paddingBottom": 0,
                            "paddingLeft": "0",
                            "paddingRight": "0",
                            "borderTop": 0,
                            "borderBottom": 0,
                            "borderLeft": 0,
                            "borderRight": 0,
                            "backgroundColor": "#ffffff",
                            "hasBackground": true,
                            "backgroundRepeat": "no-repeat",
                            "backgroundPosition": "center",
                            "backgroundSize": "cover",
                            "rowSpan": "2",
                            "columnSpan": "1",
                            "gap": 15,
                            "height": 510,
                            "alignItems": "start",
                            "justifyContent": "center"
                        }
                    },
                    "hasOverlay": false,
                    "overlayColor": ""
                },
                {
                    "id": uuidv4(),
                    "elements": [
                        {
                            "name": "image",
                            "image": "/image.png",
                            "id": uuidv4(),
                            "styles": {
                                "320": {
                                    "height": "50",
                                    "width": "50",
                                    "rowSpan": "12",
                                    "columnSpan": "2"
                                },
                                "425": {
                                    "height": "60",
                                    "width": "60",
                                    "rowSpan": "12",
                                    "columnSpan": "2"
                                },
                                "768": {
                                    "height": "70",
                                    "width": "70",
                                    "rowSpan": "12",
                                    "columnSpan": "2"
                                },
                                "1024": {
                                    "height": "80",
                                    "width": "80",
                                    "rowSpan": "12",
                                    "columnSpan": "2"
                                },
                                "1440": {
                                    "url": {
                                        "_id": "66347a885929cc25cdadd056",
                                        "folder": "65e6c37371caa6014a076ad2",
                                        "name": "Group409.png",
                                        "file_details": {
                                            "fieldname": "files",
                                            "originalname": "Group409.png",
                                            "encoding": "7bit",
                                            "mimetype": "image/png",
                                            "destination": "public/uploads/images",
                                            "filename": "1714715271484Group409.png",
                                            "path": "public/uploads/images/1714715271484Group409.png",
                                            "size": 574028
                                        },
                                        "path": "/images/1714715271484Group409.png",
                                        "is_active": true,
                                        "is_deleted": false,
                                        "createdAt": "2024-05-03T05:47:52.121Z",
                                        "updatedAt": "2024-05-03T05:47:52.121Z"
                                    },
                                    "height": "120",
                                    "width": "120",
                                    "rowSpan": "12",
                                    "columnSpan": "2"
                                }
                            },
                            "url": {
                                "_id": "66347a885929cc25cdadd056",
                                "folder": "65e6c37371caa6014a076ad2",
                                "name": "Group409.png",
                                "file_details": {
                                    "fieldname": "files",
                                    "originalname": "Group409.png",
                                    "encoding": "7bit",
                                    "mimetype": "image/png",
                                    "destination": "public/uploads/images",
                                    "filename": "1714715271484Group409.png",
                                    "path": "public/uploads/images/1714715271484Group409.png",
                                    "size": 574028
                                },
                                "path": "/images/1714715271484Group409.png",
                                "is_active": true,
                                "is_deleted": false,
                                "createdAt": "2024-05-03T05:47:52.121Z",
                                "updatedAt": "2024-05-03T05:47:52.121Z"
                            }
                        },
                        {
                            "name": "text",
                            "image": "/text.png",
                            "id": uuidv4(),
                            "styles": {
                                "320": {
                                    "content": "3D AIR TECH",
                                    "fontSize": "18",
                                    "fontWeight": "700",
                                    "columnSpan": "4",
                                    "rowSpan": "6",
                                    "verticalAlign": "bottom"
                                },
                                "425": {
                                    "content": "3D AIR TECH",
                                    "fontSize": "18",
                                    "fontWeight": "700",
                                    "columnSpan": "4",
                                    "rowSpan": "6",
                                    "verticalAlign": "bottom"
                                },
                                "768": {
                                    "content": "3D AIR TECH",
                                    "fontSize": "20",
                                    "fontWeight": "700",
                                    "columnSpan": "4",
                                    "rowSpan": "6",
                                    "verticalAlign": "bottom"
                                },
                                "1024": {
                                    "content": "3D AIR TECH",
                                    "fontSize": "22",
                                    "fontWeight": "700",
                                    "columnSpan": "4",
                                    "rowSpan": "6",
                                    "verticalAlign": "bottom"
                                },
                                "1440": {
                                    "content": "3D AIR TECH",
                                    "fontSize": "25",
                                    "fontWeight": "700",
                                    "columnSpan": "4",
                                    "rowSpan": "6",
                                    "verticalAlign": "bottom"
                                }
                            },
                            "content": "3D AIR TECH"
                        },
                        {
                            "name": "text",
                            "image": "/text.png",
                            "id": uuidv4(),
                            "styles": {
                                "320": {
                                    "content": "3D Air Technology for even \ntransfers of wind",
                                    "columnSpan": "4",
                                    "rowSpan": "6",
                                    "verticalAlign": "top",
                                    "fontSize": "9",
                                    "lineHeightType": "custom",
                                    "lineHeight": "15",
                                    "fontWeight": "500"
                                },
                                "425": {
                                    "content": "3D Air Technology for even \ntransfers of wind",
                                    "columnSpan": "4",
                                    "rowSpan": "6",
                                    "verticalAlign": "top",
                                    "fontSize": "11",
                                    "lineHeightType": "custom",
                                    "lineHeight": "15",
                                    "fontWeight": "500"
                                },
                                "768": {
                                    "content": "3D Air Technology for even \ntransfers of wind",
                                    "columnSpan": "4",
                                    "rowSpan": "6",
                                    "verticalAlign": "top",
                                    "fontSize": "12",
                                    "lineHeightType": "custom",
                                    "lineHeight": "17",
                                    "fontWeight": "500"
                                },
                                "1024": {
                                    "content": "3D Air Technology for even \ntransfers of wind",
                                    "columnSpan": "4",
                                    "rowSpan": "6",
                                    "verticalAlign": "top",
                                    "fontSize": "12",
                                    "lineHeightType": "custom",
                                    "lineHeight": "20",
                                    "fontWeight": "500"
                                },
                                "1440": {
                                    "content": "3D Air Technology for even \ntransfers of wind",
                                    "columnSpan": "4",
                                    "rowSpan": "6",
                                    "verticalAlign": "top",
                                    "fontSize": "15",
                                    "lineHeightType": "custom",
                                    "lineHeight": "20",
                                    "fontWeight": "500"
                                }
                            },
                            "content": "3D Air Technology for even \ntransfers of wind"
                        }
                    ],
                    "styles": {
                        "320": {
                            "gridCols": 6,
                            "display": "grid",
                            "gridOverflow": "overflow-visible",
                            "gridWidth": 500,
                            "gridWidthType": "custom",
                            "contentPlacement": "mx-auto",
                            "gridHeightType": "custom",
                            "radiusTopLeft": 10,
                            "radiusTopRight": 10,
                            "radiusBottomLeft": 10,
                            "radiusBottomRight": 10,
                            "paddingTop": 0,
                            "paddingBottom": 0,
                            "paddingLeft": 0,
                            "paddingRight": 0,
                            "borderTop": 0,
                            "borderBottom": 0,
                            "borderLeft": 0,
                            "borderRight": 0,
                            "backgroundColor": "#ffffff",
                            "hasBackground": true,
                            "backgroundRepeat": "no-repeat",
                            "backgroundPosition": "center",
                            "backgroundSize": "cover",
                            "rowSpan": "1",
                            "columnSpan": "2",
                            "gap": 1,
                            "height": 100,
                            "alignItems": "center",
                            "justifyContent": "start"
                        },
                        "425": {
                            "gridCols": 6,
                            "display": "grid",
                            "gridOverflow": "overflow-visible",
                            "gridWidth": 500,
                            "gridWidthType": "custom",
                            "contentPlacement": "mx-auto",
                            "gridHeightType": "custom",
                            "radiusTopLeft": 15,
                            "radiusTopRight": 15,
                            "radiusBottomLeft": 15,
                            "radiusBottomRight": 15,
                            "paddingTop": 0,
                            "paddingBottom": 0,
                            "paddingLeft": 0,
                            "paddingRight": 0,
                            "borderTop": 0,
                            "borderBottom": 0,
                            "borderLeft": 0,
                            "borderRight": 0,
                            "backgroundColor": "#ffffff",
                            "hasBackground": true,
                            "backgroundRepeat": "no-repeat",
                            "backgroundPosition": "center",
                            "backgroundSize": "cover",
                            "rowSpan": "1",
                            "columnSpan": "2",
                            "gap": 1,
                            "height": 125,
                            "alignItems": "center",
                            "justifyContent": "start"
                        },
                        "768": {
                            "gridCols": 6,
                            "display": "grid",
                            "gridOverflow": "overflow-visible",
                            "gridWidth": 500,
                            "gridWidthType": "custom",
                            "contentPlacement": "mx-auto",
                            "gridHeightType": "custom",
                            "radiusTopLeft": 20,
                            "radiusTopRight": 20,
                            "radiusBottomLeft": 20,
                            "radiusBottomRight": 20,
                            "paddingTop": 0,
                            "paddingBottom": 0,
                            "paddingLeft": 0,
                            "paddingRight": 0,
                            "borderTop": 0,
                            "borderBottom": 0,
                            "borderLeft": 0,
                            "borderRight": 0,
                            "backgroundColor": "#ffffff",
                            "hasBackground": true,
                            "backgroundRepeat": "no-repeat",
                            "backgroundPosition": "center",
                            "backgroundSize": "cover",
                            "rowSpan": "1",
                            "columnSpan": "2",
                            "gap": 1,
                            "height": 160,
                            "alignItems": "center",
                            "justifyContent": "start"
                        },
                        "1024": {
                            "gridCols": 6,
                            "display": "grid",
                            "gridOverflow": "overflow-visible",
                            "gridWidth": 500,
                            "gridWidthType": "custom",
                            "contentPlacement": "mx-auto",
                            "gridHeightType": "custom",
                            "radiusTopLeft": 20,
                            "radiusTopRight": 20,
                            "radiusBottomLeft": 20,
                            "radiusBottomRight": 20,
                            "paddingTop": 0,
                            "paddingBottom": 0,
                            "paddingLeft": 0,
                            "paddingRight": 0,
                            "borderTop": 0,
                            "borderBottom": 0,
                            "borderLeft": 0,
                            "borderRight": 0,
                            "backgroundColor": "#ffffff",
                            "hasBackground": true,
                            "backgroundRepeat": "no-repeat",
                            "backgroundPosition": "center",
                            "backgroundSize": "cover",
                            "rowSpan": "1",
                            "columnSpan": "2",
                            "gap": 1,
                            "height": 175,
                            "alignItems": "center",
                            "justifyContent": "start"
                        },
                        "1440": {
                            "gridCols": 6,
                            "display": "grid",
                            "gridOverflow": "overflow-visible",
                            "gridWidth": 500,
                            "gridWidthType": "custom",
                            "contentPlacement": "mx-auto",
                            "gridHeightType": "custom",
                            "radiusTopLeft": 30,
                            "radiusTopRight": 30,
                            "radiusBottomLeft": 30,
                            "radiusBottomRight": 30,
                            "paddingTop": 0,
                            "paddingBottom": 0,
                            "paddingLeft": 0,
                            "paddingRight": 0,
                            "borderTop": 0,
                            "borderBottom": 0,
                            "borderLeft": 0,
                            "borderRight": 0,
                            "backgroundColor": "#ffffff",
                            "hasBackground": true,
                            "backgroundRepeat": "no-repeat",
                            "backgroundPosition": "center",
                            "backgroundSize": "cover",
                            "rowSpan": "1",
                            "columnSpan": "2",
                            "gap": 1,
                            "height": 240,
                            "alignItems": "center",
                            "justifyContent": "start"
                        }
                    },
                    "hasOverlay": false,
                    "overlayColor": ""
                },
                {
                    "id": uuidv4(),
                    "elements": [
                        {
                            "name": "image",
                            "image": "/image.png",
                            "id": uuidv4(),
                            "styles": {
                                "320": {
                                    "height": "50",
                                    "width": "50"
                                },
                                "425": {
                                    "height": "60",
                                    "width": "60"
                                },
                                "768": {
                                    "height": "70",
                                    "width": "70"
                                },
                                "1024": {
                                    "height": "80",
                                    "width": "80"
                                },
                                "1440": {
                                    "url": {
                                        "_id": "66501eeef0dbc85e32fe9e22",
                                        "folder": "663e008a5929cc25cdae1c74",
                                        "name": "Frame5.png",
                                        "file_details": {
                                            "fieldname": "files",
                                            "originalname": "Frame5.png",
                                            "encoding": "7bit",
                                            "mimetype": "image/png",
                                            "destination": "public/uploads/images",
                                            "filename": "1716526830248Frame5.png",
                                            "path": "public/uploads/images/1716526830248Frame5.png",
                                            "size": 337971
                                        },
                                        "path": "/images/1716526830248Frame5.png",
                                        "is_active": true,
                                        "is_deleted": false,
                                        "createdAt": "2024-05-24T05:00:30.565Z",
                                        "updatedAt": "2024-05-24T05:00:30.565Z"
                                    },
                                    "height": "120",
                                    "width": "120"
                                }
                            },
                            "url": {
                                "_id": "66501eeef0dbc85e32fe9e22",
                                "folder": "663e008a5929cc25cdae1c74",
                                "name": "Frame5.png",
                                "file_details": {
                                    "fieldname": "files",
                                    "originalname": "Frame5.png",
                                    "encoding": "7bit",
                                    "mimetype": "image/png",
                                    "destination": "public/uploads/images",
                                    "filename": "1716526830248Frame5.png",
                                    "path": "public/uploads/images/1716526830248Frame5.png",
                                    "size": 337971
                                },
                                "path": "/images/1716526830248Frame5.png",
                                "is_active": true,
                                "is_deleted": false,
                                "createdAt": "2024-05-24T05:00:30.565Z",
                                "updatedAt": "2024-05-24T05:00:30.565Z"
                            }
                        },
                        {
                            "name": "text",
                            "image": "/text.png",
                            "id": uuidv4(),
                            "styles": {
                                "320": {
                                    "content": "FRESH AIR FLOW",
                                    "textAlign": "center",
                                    "fontSize": "10",
                                    "fontWeight": "500"
                                },
                                "425": {
                                    "content": "FRESH AIR FLOW",
                                    "textAlign": "center",
                                    "fontSize": "12",
                                    "fontWeight": "500"
                                },
                                "768": {
                                    "content": "FRESH AIR FLOW",
                                    "textAlign": "center",
                                    "fontSize": "15",
                                    "fontWeight": "500"
                                },
                                "1024": {
                                    "content": "FRESH AIR FLOW",
                                    "textAlign": "center",
                                    "fontSize": "17",
                                    "fontWeight": "500"
                                },
                                "1440": {
                                    "content": "FRESH AIR FLOW",
                                    "textAlign": "center",
                                    "fontSize": "20",
                                    "fontWeight": "500"
                                }
                            },
                            "content": "ANTI GERMS"
                        }
                    ],
                    "styles": {
                        "320": {
                            "flexDirection": "column",
                            "display": "flex",
                            "gridOverflow": "overflow-visible",
                            "gridWidth": 500,
                            "gridWidthType": "custom",
                            "contentPlacement": "mx-auto",
                            "gridHeightType": "custom",
                            "radiusTopLeft": 10,
                            "radiusTopRight": 10,
                            "radiusBottomLeft": 10,
                            "radiusBottomRight": 10,
                            "paddingTop": 0,
                            "paddingBottom": 0,
                            "paddingLeft": 0,
                            "paddingRight": 0,
                            "borderTop": 0,
                            "borderBottom": 0,
                            "borderLeft": 0,
                            "borderRight": 0,
                            "backgroundColor": "#ffffff",
                            "hasBackground": true,
                            "backgroundRepeat": "no-repeat",
                            "backgroundPosition": "center",
                            "backgroundSize": "cover",
                            "rowSpan": "1",
                            "columnSpan": "1",
                            "gap": 10,
                            "height": 100,
                            "alignItems": "start",
                            "justifyContent": "center"
                        },
                        "425": {
                            "flexDirection": "column",
                            "display": "flex",
                            "gridOverflow": "overflow-visible",
                            "gridWidth": 500,
                            "gridWidthType": "custom",
                            "contentPlacement": "mx-auto",
                            "gridHeightType": "custom",
                            "radiusTopLeft": 15,
                            "radiusTopRight": 15,
                            "radiusBottomLeft": 15,
                            "radiusBottomRight": 15,
                            "paddingTop": 0,
                            "paddingBottom": 0,
                            "paddingLeft": 0,
                            "paddingRight": 0,
                            "borderTop": 0,
                            "borderBottom": 0,
                            "borderLeft": 0,
                            "borderRight": 0,
                            "backgroundColor": "#ffffff",
                            "hasBackground": true,
                            "backgroundRepeat": "no-repeat",
                            "backgroundPosition": "center",
                            "backgroundSize": "cover",
                            "rowSpan": "1",
                            "columnSpan": "1",
                            "gap": 10,
                            "height": 125,
                            "alignItems": "start",
                            "justifyContent": "center"
                        },
                        "768": {
                            "flexDirection": "column",
                            "display": "flex",
                            "gridOverflow": "overflow-visible",
                            "gridWidth": 500,
                            "gridWidthType": "custom",
                            "contentPlacement": "mx-auto",
                            "gridHeightType": "custom",
                            "radiusTopLeft": 20,
                            "radiusTopRight": 20,
                            "radiusBottomLeft": 20,
                            "radiusBottomRight": 20,
                            "paddingTop": 0,
                            "paddingBottom": 0,
                            "paddingLeft": 0,
                            "paddingRight": 0,
                            "borderTop": 0,
                            "borderBottom": 0,
                            "borderLeft": 0,
                            "borderRight": 0,
                            "backgroundColor": "#ffffff",
                            "hasBackground": true,
                            "backgroundRepeat": "no-repeat",
                            "backgroundPosition": "center",
                            "backgroundSize": "cover",
                            "rowSpan": "1",
                            "columnSpan": "1",
                            "gap": 10,
                            "height": 160,
                            "alignItems": "start",
                            "justifyContent": "center"
                        },
                        "1024": {
                            "flexDirection": "column",
                            "display": "flex",
                            "gridOverflow": "overflow-visible",
                            "gridWidth": 500,
                            "gridWidthType": "custom",
                            "contentPlacement": "mx-auto",
                            "gridHeightType": "custom",
                            "radiusTopLeft": 20,
                            "radiusTopRight": 20,
                            "radiusBottomLeft": 20,
                            "radiusBottomRight": 20,
                            "paddingTop": 0,
                            "paddingBottom": 0,
                            "paddingLeft": 0,
                            "paddingRight": 0,
                            "borderTop": 0,
                            "borderBottom": 0,
                            "borderLeft": 0,
                            "borderRight": 0,
                            "backgroundColor": "#ffffff",
                            "hasBackground": true,
                            "backgroundRepeat": "no-repeat",
                            "backgroundPosition": "center",
                            "backgroundSize": "cover",
                            "rowSpan": "1",
                            "columnSpan": "1",
                            "gap": 20,
                            "height": 175,
                            "alignItems": "start",
                            "justifyContent": "center"
                        },
                        "1440": {
                            "flexDirection": "column",
                            "display": "flex",
                            "gridOverflow": "overflow-visible",
                            "gridWidth": 500,
                            "gridWidthType": "custom",
                            "contentPlacement": "mx-auto",
                            "gridHeightType": "custom",
                            "radiusTopLeft": 30,
                            "radiusTopRight": 30,
                            "radiusBottomLeft": 30,
                            "radiusBottomRight": 30,
                            "paddingTop": 0,
                            "paddingBottom": 0,
                            "paddingLeft": 0,
                            "paddingRight": 0,
                            "borderTop": 0,
                            "borderBottom": 0,
                            "borderLeft": 0,
                            "borderRight": 0,
                            "backgroundColor": "#ffffff",
                            "hasBackground": true,
                            "backgroundRepeat": "no-repeat",
                            "backgroundPosition": "center",
                            "backgroundSize": "cover",
                            "rowSpan": "1",
                            "columnSpan": "1",
                            "gap": 20,
                            "height": 240,
                            "alignItems": "start",
                            "justifyContent": "center"
                        }
                    },
                    "hasOverlay": false,
                    "overlayColor": ""
                },
                {
                    "id": uuidv4(),
                    "elements": [
                        {
                            "name": "image",
                            "image": "/image.png",
                            "id": uuidv4(),
                            "styles": {
                                "320": {
                                    "height": "50",
                                    "width": "50"
                                },
                                "425": {
                                    "height": "60",
                                    "width": "60"
                                },
                                "768": {
                                    "height": "70",
                                    "width": "70"
                                },
                                "1024": {
                                    "height": "80",
                                    "width": "80"
                                },
                                "1440": {
                                    "url": {
                                        "_id": "66501efff0dbc85e32fe9e2b",
                                        "folder": "663e008a5929cc25cdae1c74",
                                        "name": "Frame8.png",
                                        "file_details": {
                                            "fieldname": "files",
                                            "originalname": "Frame8.png",
                                            "encoding": "7bit",
                                            "mimetype": "image/png",
                                            "destination": "public/uploads/images",
                                            "filename": "1716526847270Frame8.png",
                                            "path": "public/uploads/images/1716526847270Frame8.png",
                                            "size": 341825
                                        },
                                        "path": "/images/1716526847270Frame8.png",
                                        "is_active": true,
                                        "is_deleted": false,
                                        "createdAt": "2024-05-24T05:00:47.555Z",
                                        "updatedAt": "2024-05-24T05:00:47.555Z"
                                    },
                                    "height": "120",
                                    "width": "120"
                                }
                            },
                            "url": {
                                "_id": "66501efff0dbc85e32fe9e2b",
                                "folder": "663e008a5929cc25cdae1c74",
                                "name": "Frame8.png",
                                "file_details": {
                                    "fieldname": "files",
                                    "originalname": "Frame8.png",
                                    "encoding": "7bit",
                                    "mimetype": "image/png",
                                    "destination": "public/uploads/images",
                                    "filename": "1716526847270Frame8.png",
                                    "path": "public/uploads/images/1716526847270Frame8.png",
                                    "size": 341825
                                },
                                "path": "/images/1716526847270Frame8.png",
                                "is_active": true,
                                "is_deleted": false,
                                "createdAt": "2024-05-24T05:00:47.555Z",
                                "updatedAt": "2024-05-24T05:00:47.555Z"
                            }
                        },
                        {
                            "name": "text",
                            "image": "/text.png",
                            "id": uuidv4(),
                            "styles": {
                                "320": {
                                    "content": "RELIABLE QUALITY",
                                    "textAlign": "center",
                                    "fontSize": "10",
                                    "lineHeightType": "custom",
                                    "fontWeight": "500"
                                },
                                "425": {
                                    "content": "RELIABLE QUALITY",
                                    "textAlign": "center",
                                    "fontSize": "12",
                                    "lineHeightType": "custom",
                                    "fontWeight": "500"
                                },
                                "768": {
                                    "content": "RELIABLE QUALITY",
                                    "textAlign": "center",
                                    "fontSize": "15",
                                    "lineHeightType": "custom",
                                    "fontWeight": "500"
                                },
                                "1024": {
                                    "content": "RELIABLE QUALITY",
                                    "textAlign": "center",
                                    "fontSize": "17",
                                    "lineHeightType": "custom",
                                    "fontWeight": "500"
                                },
                                "1440": {
                                    "content": "RELIABLE QUALITY",
                                    "textAlign": "center",
                                    "fontSize": "20",
                                    "lineHeightType": "custom",
                                    "fontWeight": "500"
                                }
                            },
                            "content": "ELECTRICITY\nSAVING"
                        }
                    ],
                    "styles": {
                        "320": {
                            "flexDirection": "column",
                            "display": "flex",
                            "gridOverflow": "overflow-visible",
                            "gridWidth": 500,
                            "gridWidthType": "custom",
                            "contentPlacement": "mx-auto",
                            "gridHeightType": "custom",
                            "radiusTopLeft": 10,
                            "radiusTopRight": 10,
                            "radiusBottomLeft": 10,
                            "radiusBottomRight": 10,
                            "paddingTop": 0,
                            "paddingBottom": 0,
                            "paddingLeft": 0,
                            "paddingRight": 0,
                            "borderTop": 0,
                            "borderBottom": 0,
                            "borderLeft": 0,
                            "borderRight": 0,
                            "backgroundColor": "#ffffff",
                            "hasBackground": true,
                            "backgroundRepeat": "no-repeat",
                            "backgroundPosition": "center",
                            "backgroundSize": "cover",
                            "rowSpan": "1",
                            "columnSpan": "1",
                            "gap": 10,
                            "height": 100,
                            "alignItems": "start",
                            "justifyContent": "center"
                        },
                        "425": {
                            "flexDirection": "column",
                            "display": "flex",
                            "gridOverflow": "overflow-visible",
                            "gridWidth": 500,
                            "gridWidthType": "custom",
                            "contentPlacement": "mx-auto",
                            "gridHeightType": "custom",
                            "radiusTopLeft": 15,
                            "radiusTopRight": 15,
                            "radiusBottomLeft": 15,
                            "radiusBottomRight": 15,
                            "paddingTop": 0,
                            "paddingBottom": 0,
                            "paddingLeft": 0,
                            "paddingRight": 0,
                            "borderTop": 0,
                            "borderBottom": 0,
                            "borderLeft": 0,
                            "borderRight": 0,
                            "backgroundColor": "#ffffff",
                            "hasBackground": true,
                            "backgroundRepeat": "no-repeat",
                            "backgroundPosition": "center",
                            "backgroundSize": "cover",
                            "rowSpan": "1",
                            "columnSpan": "1",
                            "gap": 10,
                            "height": 125,
                            "alignItems": "start",
                            "justifyContent": "center"
                        },
                        "768": {
                            "flexDirection": "column",
                            "display": "flex",
                            "gridOverflow": "overflow-visible",
                            "gridWidth": 500,
                            "gridWidthType": "custom",
                            "contentPlacement": "mx-auto",
                            "gridHeightType": "custom",
                            "radiusTopLeft": 20,
                            "radiusTopRight": 20,
                            "radiusBottomLeft": 20,
                            "radiusBottomRight": 20,
                            "paddingTop": 0,
                            "paddingBottom": 0,
                            "paddingLeft": 0,
                            "paddingRight": 0,
                            "borderTop": 0,
                            "borderBottom": 0,
                            "borderLeft": 0,
                            "borderRight": 0,
                            "backgroundColor": "#ffffff",
                            "hasBackground": true,
                            "backgroundRepeat": "no-repeat",
                            "backgroundPosition": "center",
                            "backgroundSize": "cover",
                            "rowSpan": "1",
                            "columnSpan": "1",
                            "gap": 10,
                            "height": 160,
                            "alignItems": "start",
                            "justifyContent": "center"
                        },
                        "1024": {
                            "flexDirection": "column",
                            "display": "flex",
                            "gridOverflow": "overflow-visible",
                            "gridWidth": 500,
                            "gridWidthType": "custom",
                            "contentPlacement": "mx-auto",
                            "gridHeightType": "custom",
                            "radiusTopLeft": 20,
                            "radiusTopRight": 20,
                            "radiusBottomLeft": 20,
                            "radiusBottomRight": 20,
                            "paddingTop": 0,
                            "paddingBottom": 0,
                            "paddingLeft": 0,
                            "paddingRight": 0,
                            "borderTop": 0,
                            "borderBottom": 0,
                            "borderLeft": 0,
                            "borderRight": 0,
                            "backgroundColor": "#ffffff",
                            "hasBackground": true,
                            "backgroundRepeat": "no-repeat",
                            "backgroundPosition": "center",
                            "backgroundSize": "cover",
                            "rowSpan": "1",
                            "columnSpan": "1",
                            "gap": 20,
                            "height": 175,
                            "alignItems": "start",
                            "justifyContent": "center"
                        },
                        "1440": {
                            "flexDirection": "column",
                            "display": "flex",
                            "gridOverflow": "overflow-visible",
                            "gridWidth": 500,
                            "gridWidthType": "custom",
                            "contentPlacement": "mx-auto",
                            "gridHeightType": "custom",
                            "radiusTopLeft": 30,
                            "radiusTopRight": 30,
                            "radiusBottomLeft": 30,
                            "radiusBottomRight": 30,
                            "paddingTop": 0,
                            "paddingBottom": 0,
                            "paddingLeft": 0,
                            "paddingRight": 0,
                            "borderTop": 0,
                            "borderBottom": 0,
                            "borderLeft": 0,
                            "borderRight": 0,
                            "backgroundColor": "#ffffff",
                            "hasBackground": true,
                            "backgroundRepeat": "no-repeat",
                            "backgroundPosition": "center",
                            "backgroundSize": "cover",
                            "rowSpan": "1",
                            "columnSpan": "1",
                            "gap": 20,
                            "height": 240,
                            "alignItems": "start",
                            "justifyContent": "center"
                        }
                    },
                    "hasOverlay": false,
                    "overlayColor": ""
                },
                {
                    "id": uuidv4(),
                    "elements": [
                        {
                            "name": "image",
                            "image": "/image.png",
                            "id": uuidv4(),
                            "styles": {
                                "320": {
                                    "height": "50",
                                    "width": "50"
                                },
                                "425": {
                                    "height": "60",
                                    "width": "60"
                                },
                                "768": {
                                    "height": "70",
                                    "width": "70"
                                },
                                "1024": {
                                    "height": "80",
                                    "width": "80"
                                },
                                "1440": {
                                    "url": {
                                        "_id": "66347a745929cc25cdadd03d",
                                        "folder": "65e6c37371caa6014a076ad2",
                                        "name": "10.png",
                                        "file_details": {
                                            "fieldname": "files",
                                            "originalname": "10.png",
                                            "encoding": "7bit",
                                            "mimetype": "image/png",
                                            "destination": "public/uploads/images",
                                            "filename": "171471524955610.png",
                                            "path": "public/uploads/images/171471524955610.png",
                                            "size": 564062
                                        },
                                        "path": "/images/171471524955610.png",
                                        "is_active": true,
                                        "is_deleted": false,
                                        "createdAt": "2024-05-03T05:47:32.997Z",
                                        "updatedAt": "2024-05-03T05:47:32.997Z"
                                    },
                                    "height": "120",
                                    "width": "120"
                                }
                            },
                            "url": {
                                "_id": "66347a745929cc25cdadd03d",
                                "folder": "65e6c37371caa6014a076ad2",
                                "name": "10.png",
                                "file_details": {
                                    "fieldname": "files",
                                    "originalname": "10.png",
                                    "encoding": "7bit",
                                    "mimetype": "image/png",
                                    "destination": "public/uploads/images",
                                    "filename": "171471524955610.png",
                                    "path": "public/uploads/images/171471524955610.png",
                                    "size": 564062
                                },
                                "path": "/images/171471524955610.png",
                                "is_active": true,
                                "is_deleted": false,
                                "createdAt": "2024-05-03T05:47:32.997Z",
                                "updatedAt": "2024-05-03T05:47:32.997Z"
                            }
                        },
                        {
                            "name": "text",
                            "image": "/text.png",
                            "id": uuidv4(),
                            "styles": {
                                "320": {
                                    "content": "GOLDEN FINN",
                                    "textAlign": "center",
                                    "fontSize": "10",
                                    "fontWeight": "500"
                                },
                                "425": {
                                    "content": "GOLDEN FINN",
                                    "textAlign": "center",
                                    "fontSize": "12",
                                    "fontWeight": "500"
                                },
                                "768": {
                                    "content": "GOLDEN FINN",
                                    "textAlign": "center",
                                    "fontSize": "15",
                                    "fontWeight": "500"
                                },
                                "1024": {
                                    "content": "GOLDEN FINN",
                                    "textAlign": "center",
                                    "fontSize": "17",
                                    "fontWeight": "500"
                                },
                                "1440": {
                                    "content": "GOLDEN FINN",
                                    "textAlign": "center",
                                    "fontSize": "20",
                                    "fontWeight": "500"
                                }
                            },
                            "content": "GOLDEN FINN"
                        }
                    ],
                    "styles": {
                        "320": {
                            "flexDirection": "column",
                            "display": "flex",
                            "gridOverflow": "overflow-visible",
                            "gridWidth": 500,
                            "gridWidthType": "custom",
                            "contentPlacement": "mx-auto",
                            "gridHeightType": "custom",
                            "radiusTopLeft": 10,
                            "radiusTopRight": 10,
                            "radiusBottomLeft": 10,
                            "radiusBottomRight": 10,
                            "paddingTop": 0,
                            "paddingBottom": 0,
                            "paddingLeft": 0,
                            "paddingRight": 0,
                            "borderTop": 0,
                            "borderBottom": 0,
                            "borderLeft": 0,
                            "borderRight": 0,
                            "backgroundColor": "#ffffff",
                            "hasBackground": true,
                            "backgroundRepeat": "no-repeat",
                            "backgroundPosition": "center",
                            "backgroundSize": "cover",
                            "rowSpan": "1",
                            "columnSpan": "1",
                            "gap": 10,
                            "height": 100,
                            "alignItems": "start",
                            "justifyContent": "center"
                        },
                        "425": {
                            "flexDirection": "column",
                            "display": "flex",
                            "gridOverflow": "overflow-visible",
                            "gridWidth": 500,
                            "gridWidthType": "custom",
                            "contentPlacement": "mx-auto",
                            "gridHeightType": "custom",
                            "radiusTopLeft": 15,
                            "radiusTopRight": 15,
                            "radiusBottomLeft": 15,
                            "radiusBottomRight": 15,
                            "paddingTop": 0,
                            "paddingBottom": 0,
                            "paddingLeft": 0,
                            "paddingRight": 0,
                            "borderTop": 0,
                            "borderBottom": 0,
                            "borderLeft": 0,
                            "borderRight": 0,
                            "backgroundColor": "#ffffff",
                            "hasBackground": true,
                            "backgroundRepeat": "no-repeat",
                            "backgroundPosition": "center",
                            "backgroundSize": "cover",
                            "rowSpan": "1",
                            "columnSpan": "1",
                            "gap": 10,
                            "height": 125,
                            "alignItems": "start",
                            "justifyContent": "center"
                        },
                        "768": {
                            "flexDirection": "column",
                            "display": "flex",
                            "gridOverflow": "overflow-visible",
                            "gridWidth": 500,
                            "gridWidthType": "custom",
                            "contentPlacement": "mx-auto",
                            "gridHeightType": "custom",
                            "radiusTopLeft": 20,
                            "radiusTopRight": 20,
                            "radiusBottomLeft": 20,
                            "radiusBottomRight": 20,
                            "paddingTop": 0,
                            "paddingBottom": 0,
                            "paddingLeft": 0,
                            "paddingRight": 0,
                            "borderTop": 0,
                            "borderBottom": 0,
                            "borderLeft": 0,
                            "borderRight": 0,
                            "backgroundColor": "#ffffff",
                            "hasBackground": true,
                            "backgroundRepeat": "no-repeat",
                            "backgroundPosition": "center",
                            "backgroundSize": "cover",
                            "rowSpan": "1",
                            "columnSpan": "1",
                            "gap": 10,
                            "height": 160,
                            "alignItems": "start",
                            "justifyContent": "center"
                        },
                        "1024": {
                            "flexDirection": "column",
                            "display": "flex",
                            "gridOverflow": "overflow-visible",
                            "gridWidth": 500,
                            "gridWidthType": "custom",
                            "contentPlacement": "mx-auto",
                            "gridHeightType": "custom",
                            "radiusTopLeft": 20,
                            "radiusTopRight": 20,
                            "radiusBottomLeft": 20,
                            "radiusBottomRight": 20,
                            "paddingTop": 0,
                            "paddingBottom": 0,
                            "paddingLeft": 0,
                            "paddingRight": 0,
                            "borderTop": 0,
                            "borderBottom": 0,
                            "borderLeft": 0,
                            "borderRight": 0,
                            "backgroundColor": "#ffffff",
                            "hasBackground": true,
                            "backgroundRepeat": "no-repeat",
                            "backgroundPosition": "center",
                            "backgroundSize": "cover",
                            "rowSpan": "1",
                            "columnSpan": "1",
                            "gap": 20,
                            "height": 175,
                            "alignItems": "start",
                            "justifyContent": "center"
                        },
                        "1440": {
                            "flexDirection": "column",
                            "display": "flex",
                            "gridOverflow": "overflow-visible",
                            "gridWidth": 500,
                            "gridWidthType": "custom",
                            "contentPlacement": "mx-auto",
                            "gridHeightType": "custom",
                            "radiusTopLeft": 30,
                            "radiusTopRight": 30,
                            "radiusBottomLeft": 30,
                            "radiusBottomRight": 30,
                            "paddingTop": 0,
                            "paddingBottom": 0,
                            "paddingLeft": 0,
                            "paddingRight": 0,
                            "borderTop": 0,
                            "borderBottom": 0,
                            "borderLeft": 0,
                            "borderRight": 0,
                            "backgroundColor": "#ffffff",
                            "hasBackground": true,
                            "backgroundRepeat": "no-repeat",
                            "backgroundPosition": "center",
                            "backgroundSize": "cover",
                            "rowSpan": "1",
                            "columnSpan": "1",
                            "gap": 20,
                            "height": 240,
                            "alignItems": "start",
                            "justifyContent": "center"
                        }
                    },
                    "hasOverlay": false,
                    "overlayColor": ""
                },
                {
                    "id": uuidv4(),
                    "elements": [
                        {
                            "name": "image",
                            "image": "/image.png",
                            "id": uuidv4(),
                            "styles": {
                                "320": {
                                    "height": "50",
                                    "width": "50"
                                },
                                "425": {
                                    "height": "60",
                                    "width": "60"
                                },
                                "768": {
                                    "height": "70",
                                    "width": "70"
                                },
                                "1024": {
                                    "height": "80",
                                    "width": "80"
                                },
                                "1440": {
                                    "url": {
                                        "_id": "66347a885929cc25cdadd060",
                                        "folder": "65e6c37371caa6014a076ad2",
                                        "name": "Group419.png",
                                        "file_details": {
                                            "fieldname": "files",
                                            "originalname": "Group419.png",
                                            "encoding": "7bit",
                                            "mimetype": "image/png",
                                            "destination": "public/uploads/images",
                                            "filename": "1714715271536Group419.png",
                                            "path": "public/uploads/images/1714715271536Group419.png",
                                            "size": 573338
                                        },
                                        "path": "/images/1714715271536Group419.png",
                                        "is_active": true,
                                        "is_deleted": false,
                                        "createdAt": "2024-05-03T05:47:52.364Z",
                                        "updatedAt": "2024-05-03T05:47:52.364Z"
                                    },
                                    "height": "120",
                                    "width": "120"
                                }
                            },
                            "url": {
                                "_id": "66347a885929cc25cdadd060",
                                "folder": "65e6c37371caa6014a076ad2",
                                "name": "Group419.png",
                                "file_details": {
                                    "fieldname": "files",
                                    "originalname": "Group419.png",
                                    "encoding": "7bit",
                                    "mimetype": "image/png",
                                    "destination": "public/uploads/images",
                                    "filename": "1714715271536Group419.png",
                                    "path": "public/uploads/images/1714715271536Group419.png",
                                    "size": 573338
                                },
                                "path": "/images/1714715271536Group419.png",
                                "is_active": true,
                                "is_deleted": false,
                                "createdAt": "2024-05-03T05:47:52.364Z",
                                "updatedAt": "2024-05-03T05:47:52.364Z"
                            }
                        },
                        {
                            "name": "text",
                            "image": "/text.png",
                            "id": uuidv4(),
                            "styles": {
                                "320": {
                                    "content": "HEATING & \nCOOLING",
                                    "textAlign": "center",
                                    "fontSize": "10",
                                    "lineHeightType": "custom",
                                    "fontWeight": "500",
                                    "lineHeight": "15"
                                },
                                "425": {
                                    "content": "HEATING & \nCOOLING",
                                    "textAlign": "center",
                                    "fontSize": "12",
                                    "lineHeightType": "custom",
                                    "fontWeight": "500",
                                    "lineHeight": "15"
                                },
                                "768": {
                                    "content": "HEATING & \nCOOLING",
                                    "textAlign": "center",
                                    "fontSize": "15",
                                    "lineHeightType": "custom",
                                    "fontWeight": "500"
                                },
                                "1024": {
                                    "content": "HEATING & \nCOOLING",
                                    "textAlign": "center",
                                    "fontSize": "17",
                                    "lineHeightType": "custom",
                                    "fontWeight": "500"
                                },
                                "1440": {
                                    "content": "HEATING & \nCOOLING",
                                    "textAlign": "center",
                                    "fontSize": "20",
                                    "lineHeightType": "custom",
                                    "fontWeight": "500"
                                }
                            },
                            "content": "HEATING & \nCOOLING"
                        }
                    ],
                    "styles": {
                        "320": {
                            "flexDirection": "column",
                            "display": "flex",
                            "gridOverflow": "overflow-visible",
                            "gridWidth": 500,
                            "gridWidthType": "custom",
                            "contentPlacement": "mx-auto",
                            "gridHeightType": "custom",
                            "radiusTopLeft": 10,
                            "radiusTopRight": 10,
                            "radiusBottomLeft": 10,
                            "radiusBottomRight": 10,
                            "paddingTop": 0,
                            "paddingBottom": 0,
                            "paddingLeft": 0,
                            "paddingRight": 0,
                            "borderTop": 0,
                            "borderBottom": 0,
                            "borderLeft": 0,
                            "borderRight": 0,
                            "backgroundColor": "#ffffff",
                            "hasBackground": true,
                            "backgroundRepeat": "no-repeat",
                            "backgroundPosition": "center",
                            "backgroundSize": "cover",
                            "rowSpan": "1",
                            "columnSpan": "1",
                            "gap": 10,
                            "height": 100,
                            "alignItems": "start",
                            "justifyContent": "center"
                        },
                        "425": {
                            "flexDirection": "column",
                            "display": "flex",
                            "gridOverflow": "overflow-visible",
                            "gridWidth": 500,
                            "gridWidthType": "custom",
                            "contentPlacement": "mx-auto",
                            "gridHeightType": "custom",
                            "radiusTopLeft": 15,
                            "radiusTopRight": 15,
                            "radiusBottomLeft": 15,
                            "radiusBottomRight": 15,
                            "paddingTop": 0,
                            "paddingBottom": 0,
                            "paddingLeft": 0,
                            "paddingRight": 0,
                            "borderTop": 0,
                            "borderBottom": 0,
                            "borderLeft": 0,
                            "borderRight": 0,
                            "backgroundColor": "#ffffff",
                            "hasBackground": true,
                            "backgroundRepeat": "no-repeat",
                            "backgroundPosition": "center",
                            "backgroundSize": "cover",
                            "rowSpan": "1",
                            "columnSpan": "1",
                            "gap": 10,
                            "height": 125,
                            "alignItems": "start",
                            "justifyContent": "center"
                        },
                        "768": {
                            "flexDirection": "column",
                            "display": "flex",
                            "gridOverflow": "overflow-visible",
                            "gridWidth": 500,
                            "gridWidthType": "custom",
                            "contentPlacement": "mx-auto",
                            "gridHeightType": "custom",
                            "radiusTopLeft": 20,
                            "radiusTopRight": 20,
                            "radiusBottomLeft": 20,
                            "radiusBottomRight": 20,
                            "paddingTop": 0,
                            "paddingBottom": 0,
                            "paddingLeft": 0,
                            "paddingRight": 0,
                            "borderTop": 0,
                            "borderBottom": 0,
                            "borderLeft": 0,
                            "borderRight": 0,
                            "backgroundColor": "#ffffff",
                            "hasBackground": true,
                            "backgroundRepeat": "no-repeat",
                            "backgroundPosition": "center",
                            "backgroundSize": "cover",
                            "rowSpan": "1",
                            "columnSpan": "1",
                            "gap": 10,
                            "height": 160,
                            "alignItems": "start",
                            "justifyContent": "center"
                        },
                        "1024": {
                            "flexDirection": "column",
                            "display": "flex",
                            "gridOverflow": "overflow-visible",
                            "gridWidth": 500,
                            "gridWidthType": "custom",
                            "contentPlacement": "mx-auto",
                            "gridHeightType": "custom",
                            "radiusTopLeft": 20,
                            "radiusTopRight": 20,
                            "radiusBottomLeft": 20,
                            "radiusBottomRight": 20,
                            "paddingTop": 0,
                            "paddingBottom": 0,
                            "paddingLeft": 0,
                            "paddingRight": 0,
                            "borderTop": 0,
                            "borderBottom": 0,
                            "borderLeft": 0,
                            "borderRight": 0,
                            "backgroundColor": "#ffffff",
                            "hasBackground": true,
                            "backgroundRepeat": "no-repeat",
                            "backgroundPosition": "center",
                            "backgroundSize": "cover",
                            "rowSpan": "1",
                            "columnSpan": "1",
                            "gap": 20,
                            "height": 175,
                            "alignItems": "start",
                            "justifyContent": "center"
                        },
                        "1440": {
                            "flexDirection": "column",
                            "display": "flex",
                            "gridOverflow": "overflow-visible",
                            "gridWidth": 500,
                            "gridWidthType": "custom",
                            "contentPlacement": "mx-auto",
                            "gridHeightType": "custom",
                            "radiusTopLeft": 30,
                            "radiusTopRight": 30,
                            "radiusBottomLeft": 30,
                            "radiusBottomRight": 30,
                            "paddingTop": 0,
                            "paddingBottom": 0,
                            "paddingLeft": 0,
                            "paddingRight": 0,
                            "borderTop": 0,
                            "borderBottom": 0,
                            "borderLeft": 0,
                            "borderRight": 0,
                            "backgroundColor": "#ffffff",
                            "hasBackground": true,
                            "backgroundRepeat": "no-repeat",
                            "backgroundPosition": "center",
                            "backgroundSize": "cover",
                            "rowSpan": "1",
                            "columnSpan": "1",
                            "gap": 20,
                            "height": 240,
                            "alignItems": "start",
                            "justifyContent": "center"
                        }
                    },
                    "hasOverlay": false,
                    "overlayColor": ""
                },
                {
                    "id": uuidv4(),
                    "elements": [
                        {
                            "name": "image",
                            "image": "/image.png",
                            "id": uuidv4(),
                            "styles": {
                                "320": {
                                    "height": "50",
                                    "width": "50"
                                },
                                "425": {
                                    "height": "60",
                                    "width": "60"
                                },
                                "768": {
                                    "height": "70",
                                    "width": "70"
                                },
                                "1024": {
                                    "height": "80",
                                    "width": "80"
                                },
                                "1440": {
                                    "url": {
                                        "_id": "66501efff0dbc85e32fe9e27",
                                        "folder": "663e008a5929cc25cdae1c74",
                                        "name": "Frame6.png",
                                        "file_details": {
                                            "fieldname": "files",
                                            "originalname": "Frame6.png",
                                            "encoding": "7bit",
                                            "mimetype": "image/png",
                                            "destination": "public/uploads/images",
                                            "filename": "1716526847205Frame6.png",
                                            "path": "public/uploads/images/1716526847205Frame6.png",
                                            "size": 334530
                                        },
                                        "path": "/images/1716526847205Frame6.png",
                                        "is_active": true,
                                        "is_deleted": false,
                                        "createdAt": "2024-05-24T05:00:47.448Z",
                                        "updatedAt": "2024-05-24T05:00:47.448Z"
                                    },
                                    "height": "120",
                                    "width": "120"
                                }
                            },
                            "url": {
                                "_id": "66501efff0dbc85e32fe9e27",
                                "folder": "663e008a5929cc25cdae1c74",
                                "name": "Frame6.png",
                                "file_details": {
                                    "fieldname": "files",
                                    "originalname": "Frame6.png",
                                    "encoding": "7bit",
                                    "mimetype": "image/png",
                                    "destination": "public/uploads/images",
                                    "filename": "1716526847205Frame6.png",
                                    "path": "public/uploads/images/1716526847205Frame6.png",
                                    "size": 334530
                                },
                                "path": "/images/1716526847205Frame6.png",
                                "is_active": true,
                                "is_deleted": false,
                                "createdAt": "2024-05-24T05:00:47.448Z",
                                "updatedAt": "2024-05-24T05:00:47.448Z"
                            }
                        },
                        {
                            "name": "text",
                            "image": "/text.png",
                            "id": uuidv4(),
                            "styles": {
                                "320": {
                                    "content": "IDEAL FOR\nCOMMERCIAL US",
                                    "textAlign": "center",
                                    "fontSize": "10",
                                    "lineHeightType": "custom",
                                    "fontWeight": "500",
                                    "lineHeight": "15"
                                },
                                "425": {
                                    "content": "IDEAL FOR\nCOMMERCIAL US",
                                    "textAlign": "center",
                                    "fontSize": "12",
                                    "lineHeightType": "custom",
                                    "fontWeight": "500",
                                    "lineHeight": "15"
                                },
                                "768": {
                                    "content": "IDEAL FOR\nCOMMERCIAL US",
                                    "textAlign": "center",
                                    "fontSize": "15",
                                    "lineHeightType": "custom",
                                    "fontWeight": "500"
                                },
                                "1024": {
                                    "content": "IDEAL FOR\nCOMMERCIAL US",
                                    "textAlign": "center",
                                    "fontSize": "17",
                                    "lineHeightType": "custom",
                                    "fontWeight": "500"
                                },
                                "1440": {
                                    "content": "IDEAL FOR\nCOMMERCIAL US",
                                    "textAlign": "center",
                                    "fontSize": "20",
                                    "lineHeightType": "custom",
                                    "fontWeight": "500"
                                }
                            },
                            "content": "DUAL ROTARY\nCOMPRESSER"
                        }
                    ],
                    "styles": {
                        "320": {
                            "flexDirection": "column",
                            "display": "flex",
                            "gridOverflow": "overflow-visible",
                            "gridWidth": 500,
                            "gridWidthType": "custom",
                            "contentPlacement": "mx-auto",
                            "gridHeightType": "custom",
                            "radiusTopLeft": 10,
                            "radiusTopRight": 10,
                            "radiusBottomLeft": 10,
                            "radiusBottomRight": 10,
                            "paddingTop": 0,
                            "paddingBottom": 0,
                            "paddingLeft": 0,
                            "paddingRight": 0,
                            "borderTop": 0,
                            "borderBottom": 0,
                            "borderLeft": 0,
                            "borderRight": 0,
                            "backgroundColor": "#ffffff",
                            "hasBackground": true,
                            "backgroundRepeat": "no-repeat",
                            "backgroundPosition": "center",
                            "backgroundSize": "cover",
                            "rowSpan": "1",
                            "columnSpan": "1",
                            "gap": 10,
                            "height": 100,
                            "alignItems": "start",
                            "justifyContent": "center"
                        },
                        "425": {
                            "flexDirection": "column",
                            "display": "flex",
                            "gridOverflow": "overflow-visible",
                            "gridWidth": 500,
                            "gridWidthType": "custom",
                            "contentPlacement": "mx-auto",
                            "gridHeightType": "custom",
                            "radiusTopLeft": 15,
                            "radiusTopRight": 15,
                            "radiusBottomLeft": 15,
                            "radiusBottomRight": 15,
                            "paddingTop": 0,
                            "paddingBottom": 0,
                            "paddingLeft": 0,
                            "paddingRight": 0,
                            "borderTop": 0,
                            "borderBottom": 0,
                            "borderLeft": 0,
                            "borderRight": 0,
                            "backgroundColor": "#ffffff",
                            "hasBackground": true,
                            "backgroundRepeat": "no-repeat",
                            "backgroundPosition": "center",
                            "backgroundSize": "cover",
                            "rowSpan": "1",
                            "columnSpan": "1",
                            "gap": 10,
                            "height": 125,
                            "alignItems": "start",
                            "justifyContent": "center"
                        },
                        "768": {
                            "flexDirection": "column",
                            "display": "flex",
                            "gridOverflow": "overflow-visible",
                            "gridWidth": 500,
                            "gridWidthType": "custom",
                            "contentPlacement": "mx-auto",
                            "gridHeightType": "custom",
                            "radiusTopLeft": 20,
                            "radiusTopRight": 20,
                            "radiusBottomLeft": 20,
                            "radiusBottomRight": 20,
                            "paddingTop": 0,
                            "paddingBottom": 0,
                            "paddingLeft": 0,
                            "paddingRight": 0,
                            "borderTop": 0,
                            "borderBottom": 0,
                            "borderLeft": 0,
                            "borderRight": 0,
                            "backgroundColor": "#ffffff",
                            "hasBackground": true,
                            "backgroundRepeat": "no-repeat",
                            "backgroundPosition": "center",
                            "backgroundSize": "cover",
                            "rowSpan": "1",
                            "columnSpan": "1",
                            "gap": 10,
                            "height": 160,
                            "alignItems": "start",
                            "justifyContent": "center"
                        },
                        "1024": {
                            "flexDirection": "column",
                            "display": "flex",
                            "gridOverflow": "overflow-visible",
                            "gridWidth": 500,
                            "gridWidthType": "custom",
                            "contentPlacement": "mx-auto",
                            "gridHeightType": "custom",
                            "radiusTopLeft": 20,
                            "radiusTopRight": 20,
                            "radiusBottomLeft": 20,
                            "radiusBottomRight": 20,
                            "paddingTop": 0,
                            "paddingBottom": 0,
                            "paddingLeft": 0,
                            "paddingRight": 0,
                            "borderTop": 0,
                            "borderBottom": 0,
                            "borderLeft": 0,
                            "borderRight": 0,
                            "backgroundColor": "#ffffff",
                            "hasBackground": true,
                            "backgroundRepeat": "no-repeat",
                            "backgroundPosition": "center",
                            "backgroundSize": "cover",
                            "rowSpan": "1",
                            "columnSpan": "1",
                            "gap": 20,
                            "height": 175,
                            "alignItems": "start",
                            "justifyContent": "center"
                        },
                        "1440": {
                            "flexDirection": "column",
                            "display": "flex",
                            "gridOverflow": "overflow-visible",
                            "gridWidth": 500,
                            "gridWidthType": "custom",
                            "contentPlacement": "mx-auto",
                            "gridHeightType": "custom",
                            "radiusTopLeft": 30,
                            "radiusTopRight": 30,
                            "radiusBottomLeft": 30,
                            "radiusBottomRight": 30,
                            "paddingTop": 0,
                            "paddingBottom": 0,
                            "paddingLeft": 0,
                            "paddingRight": 0,
                            "borderTop": 0,
                            "borderBottom": 0,
                            "borderLeft": 0,
                            "borderRight": 0,
                            "backgroundColor": "#ffffff",
                            "hasBackground": true,
                            "backgroundRepeat": "no-repeat",
                            "backgroundPosition": "center",
                            "backgroundSize": "cover",
                            "rowSpan": "1",
                            "columnSpan": "1",
                            "gap": 20,
                            "height": 240,
                            "alignItems": "start",
                            "justifyContent": "center"
                        }
                    },
                    "hasOverlay": false,
                    "overlayColor": ""
                },
                {
                    "id": uuidv4(),
                    "elements": [
                        {
                            "name": "image",
                            "image": "/image.png",
                            "id": uuidv4(),
                            "styles": {
                                "320": {
                                    "height": "50",
                                    "width": "50"
                                },
                                "425": {
                                    "height": "60",
                                    "width": "60"
                                },
                                "768": {
                                    "height": "70",
                                    "width": "70"
                                },
                                "1024": {
                                    "height": "80",
                                    "width": "80"
                                },
                                "1440": {
                                    "url": {
                                        "_id": "66347a885929cc25cdadd05a",
                                        "folder": "65e6c37371caa6014a076ad2",
                                        "name": "Group412.png",
                                        "file_details": {
                                            "fieldname": "files",
                                            "originalname": "Group412.png",
                                            "encoding": "7bit",
                                            "mimetype": "image/png",
                                            "destination": "public/uploads/images",
                                            "filename": "1714715271505Group412.png",
                                            "path": "public/uploads/images/1714715271505Group412.png",
                                            "size": 544425
                                        },
                                        "path": "/images/1714715271505Group412.png",
                                        "is_active": true,
                                        "is_deleted": false,
                                        "createdAt": "2024-05-03T05:47:52.219Z",
                                        "updatedAt": "2024-05-03T05:47:52.219Z"
                                    },
                                    "height": "120",
                                    "width": "120"
                                }
                            },
                            "url": {
                                "_id": "66347a885929cc25cdadd05a",
                                "folder": "65e6c37371caa6014a076ad2",
                                "name": "Group412.png",
                                "file_details": {
                                    "fieldname": "files",
                                    "originalname": "Group412.png",
                                    "encoding": "7bit",
                                    "mimetype": "image/png",
                                    "destination": "public/uploads/images",
                                    "filename": "1714715271505Group412.png",
                                    "path": "public/uploads/images/1714715271505Group412.png",
                                    "size": 544425
                                },
                                "path": "/images/1714715271505Group412.png",
                                "is_active": true,
                                "is_deleted": false,
                                "createdAt": "2024-05-03T05:47:52.219Z",
                                "updatedAt": "2024-05-03T05:47:52.219Z"
                            }
                        },
                        {
                            "name": "text",
                            "image": "/text.png",
                            "id": uuidv4(),
                            "styles": {
                                "320": {
                                    "content": "LONG DISTANCE\nAIR BLAST",
                                    "textAlign": "center",
                                    "fontSize": "10",
                                    "lineHeightType": "custom",
                                    "fontWeight": "500",
                                    "lineHeight": "15"
                                },
                                "425": {
                                    "content": "LONG DISTANCE\nAIR BLAST",
                                    "textAlign": "center",
                                    "fontSize": "12",
                                    "lineHeightType": "custom",
                                    "fontWeight": "500",
                                    "lineHeight": "15"
                                },
                                "768": {
                                    "content": "LONG DISTANCE\nAIR BLAST",
                                    "textAlign": "center",
                                    "fontSize": "15",
                                    "lineHeightType": "custom",
                                    "fontWeight": "500"
                                },
                                "1024": {
                                    "content": "LONG DISTANCE\nAIR BLAST",
                                    "textAlign": "center",
                                    "fontSize": "17",
                                    "lineHeightType": "custom",
                                    "fontWeight": "500"
                                },
                                "1440": {
                                    "content": "LONG DISTANCE\nAIR BLAST",
                                    "textAlign": "center",
                                    "fontSize": "20",
                                    "lineHeightType": "custom",
                                    "fontWeight": "500"
                                }
                            },
                            "content": "LONG DISTANCE\nAIR BLAST"
                        }
                    ],
                    "styles": {
                        "320": {
                            "flexDirection": "column",
                            "display": "flex",
                            "gridOverflow": "overflow-visible",
                            "gridWidth": 500,
                            "gridWidthType": "custom",
                            "contentPlacement": "mx-auto",
                            "gridHeightType": "custom",
                            "radiusTopLeft": 10,
                            "radiusTopRight": 10,
                            "radiusBottomLeft": 10,
                            "radiusBottomRight": 10,
                            "paddingTop": 0,
                            "paddingBottom": 0,
                            "paddingLeft": 0,
                            "paddingRight": 0,
                            "borderTop": 0,
                            "borderBottom": 0,
                            "borderLeft": 0,
                            "borderRight": 0,
                            "backgroundColor": "#ffffff",
                            "hasBackground": true,
                            "backgroundRepeat": "no-repeat",
                            "backgroundPosition": "center",
                            "backgroundSize": "cover",
                            "rowSpan": "1",
                            "columnSpan": "1",
                            "gap": 10,
                            "height": 100,
                            "alignItems": "start",
                            "justifyContent": "center"
                        },
                        "425": {
                            "flexDirection": "column",
                            "display": "flex",
                            "gridOverflow": "overflow-visible",
                            "gridWidth": 500,
                            "gridWidthType": "custom",
                            "contentPlacement": "mx-auto",
                            "gridHeightType": "custom",
                            "radiusTopLeft": 15,
                            "radiusTopRight": 15,
                            "radiusBottomLeft": 15,
                            "radiusBottomRight": 15,
                            "paddingTop": 0,
                            "paddingBottom": 0,
                            "paddingLeft": 0,
                            "paddingRight": 0,
                            "borderTop": 0,
                            "borderBottom": 0,
                            "borderLeft": 0,
                            "borderRight": 0,
                            "backgroundColor": "#ffffff",
                            "hasBackground": true,
                            "backgroundRepeat": "no-repeat",
                            "backgroundPosition": "center",
                            "backgroundSize": "cover",
                            "rowSpan": "1",
                            "columnSpan": "1",
                            "gap": 10,
                            "height": 125,
                            "alignItems": "start",
                            "justifyContent": "center"
                        },
                        "768": {
                            "flexDirection": "column",
                            "display": "flex",
                            "gridOverflow": "overflow-visible",
                            "gridWidth": 500,
                            "gridWidthType": "custom",
                            "contentPlacement": "mx-auto",
                            "gridHeightType": "custom",
                            "radiusTopLeft": 20,
                            "radiusTopRight": 20,
                            "radiusBottomLeft": 20,
                            "radiusBottomRight": 20,
                            "paddingTop": 0,
                            "paddingBottom": 0,
                            "paddingLeft": 0,
                            "paddingRight": 0,
                            "borderTop": 0,
                            "borderBottom": 0,
                            "borderLeft": 0,
                            "borderRight": 0,
                            "backgroundColor": "#ffffff",
                            "hasBackground": true,
                            "backgroundRepeat": "no-repeat",
                            "backgroundPosition": "center",
                            "backgroundSize": "cover",
                            "rowSpan": "1",
                            "columnSpan": "1",
                            "gap": 10,
                            "height": 160,
                            "alignItems": "start",
                            "justifyContent": "center"
                        },
                        "1024": {
                            "flexDirection": "column",
                            "display": "flex",
                            "gridOverflow": "overflow-visible",
                            "gridWidth": 500,
                            "gridWidthType": "custom",
                            "contentPlacement": "mx-auto",
                            "gridHeightType": "custom",
                            "radiusTopLeft": 20,
                            "radiusTopRight": 20,
                            "radiusBottomLeft": 20,
                            "radiusBottomRight": 20,
                            "paddingTop": 0,
                            "paddingBottom": 0,
                            "paddingLeft": 0,
                            "paddingRight": 0,
                            "borderTop": 0,
                            "borderBottom": 0,
                            "borderLeft": 0,
                            "borderRight": 0,
                            "backgroundColor": "#ffffff",
                            "hasBackground": true,
                            "backgroundRepeat": "no-repeat",
                            "backgroundPosition": "center",
                            "backgroundSize": "cover",
                            "rowSpan": "1",
                            "columnSpan": "1",
                            "gap": 20,
                            "height": 175,
                            "alignItems": "start",
                            "justifyContent": "center"
                        },
                        "1440": {
                            "flexDirection": "column",
                            "display": "flex",
                            "gridOverflow": "overflow-visible",
                            "gridWidth": 500,
                            "gridWidthType": "custom",
                            "contentPlacement": "mx-auto",
                            "gridHeightType": "custom",
                            "radiusTopLeft": 30,
                            "radiusTopRight": 30,
                            "radiusBottomLeft": 30,
                            "radiusBottomRight": 30,
                            "paddingTop": 0,
                            "paddingBottom": 0,
                            "paddingLeft": 0,
                            "paddingRight": 0,
                            "borderTop": 0,
                            "borderBottom": 0,
                            "borderLeft": 0,
                            "borderRight": 0,
                            "backgroundColor": "#ffffff",
                            "hasBackground": true,
                            "backgroundRepeat": "no-repeat",
                            "backgroundPosition": "center",
                            "backgroundSize": "cover",
                            "rowSpan": "1",
                            "columnSpan": "1",
                            "gap": 20,
                            "height": 240,
                            "alignItems": "start",
                            "justifyContent": "center"
                        }
                    },
                    "hasOverlay": false,
                    "overlayColor": ""
                }
            ],
            "styles": {
                "320": {
                    "name": "1440",
                    "gridHeightType": "fit-content",
                    "contentWidth": "max-w-sm",
                    "gridLayout": "3",
                    "hasBackground": false,
                    "paddingTop": "50",
                    "paddingRight": "10",
                    "paddingLeft": "10",
                    "paddingBottom": "50",
                    "backgroundImage": {
                        "_id": "65e6cacf71caa6014a076dc0",
                        "folder": "65e6c37371caa6014a076ad2",
                        "name": "smooth-black-paper-textured-background.jpg",
                        "file_details": {
                            "fieldname": "files",
                            "originalname": "smooth-black-paper-textured-background.jpg",
                            "encoding": "7bit",
                            "mimetype": "image/jpeg",
                            "destination": "public/uploads/images",
                            "filename": "1709624015616smooth-black-paper-textured-background.jpg",
                            "path": "public/uploads/images/1709624015616smooth-black-paper-textured-background.jpg",
                            "size": 7268987
                        },
                        "path": "/images/1709624015616smooth-black-paper-textured-background.jpg",
                        "is_active": true,
                        "is_deleted": false,
                        "createdAt": "2024-03-05T07:33:35.901Z",
                        "updatedAt": "2024-03-05T07:33:35.901Z"
                    },
                    "gap": "10",
                    "marginTop": "0",
                    "marginBottom": "0",
                    "marginLeft": "0",
                    "marginRight": "0"
                },
                "425": {
                    "name": "1440",
                    "gridHeightType": "fit-content",
                    "contentWidth": "max-w-sm",
                    "gridLayout": "3",
                    "hasBackground": false,
                    "paddingTop": "50",
                    "paddingRight": "0",
                    "paddingLeft": "0",
                    "paddingBottom": "50",
                    "backgroundImage": {
                        "_id": "65e6cacf71caa6014a076dc0",
                        "folder": "65e6c37371caa6014a076ad2",
                        "name": "smooth-black-paper-textured-background.jpg",
                        "file_details": {
                            "fieldname": "files",
                            "originalname": "smooth-black-paper-textured-background.jpg",
                            "encoding": "7bit",
                            "mimetype": "image/jpeg",
                            "destination": "public/uploads/images",
                            "filename": "1709624015616smooth-black-paper-textured-background.jpg",
                            "path": "public/uploads/images/1709624015616smooth-black-paper-textured-background.jpg",
                            "size": 7268987
                        },
                        "path": "/images/1709624015616smooth-black-paper-textured-background.jpg",
                        "is_active": true,
                        "is_deleted": false,
                        "createdAt": "2024-03-05T07:33:35.901Z",
                        "updatedAt": "2024-03-05T07:33:35.901Z"
                    },
                    "gap": "15",
                    "marginTop": "0",
                    "marginBottom": "0",
                    "marginLeft": "0",
                    "marginRight": "0"
                },
                "768": {
                    "name": "1440",
                    "gridHeightType": "fit-content",
                    "contentWidth": "max-w-2xl",
                    "gridLayout": "4",
                    "hasBackground": false,
                    "paddingTop": "50",
                    "paddingRight": "0",
                    "paddingLeft": "0",
                    "paddingBottom": "50",
                    "backgroundImage": {
                        "_id": "65e6cacf71caa6014a076dc0",
                        "folder": "65e6c37371caa6014a076ad2",
                        "name": "smooth-black-paper-textured-background.jpg",
                        "file_details": {
                            "fieldname": "files",
                            "originalname": "smooth-black-paper-textured-background.jpg",
                            "encoding": "7bit",
                            "mimetype": "image/jpeg",
                            "destination": "public/uploads/images",
                            "filename": "1709624015616smooth-black-paper-textured-background.jpg",
                            "path": "public/uploads/images/1709624015616smooth-black-paper-textured-background.jpg",
                            "size": 7268987
                        },
                        "path": "/images/1709624015616smooth-black-paper-textured-background.jpg",
                        "is_active": true,
                        "is_deleted": false,
                        "createdAt": "2024-03-05T07:33:35.901Z",
                        "updatedAt": "2024-03-05T07:33:35.901Z"
                    },
                    "gap": "20",
                    "marginTop": "0",
                    "marginBottom": "0",
                    "marginLeft": "0",
                    "marginRight": "0"
                },
                "1024": {
                    "name": "1440",
                    "gridHeightType": "fit-content",
                    "contentWidth": "max-w-4xl",
                    "gridLayout": "5",
                    "hasBackground": false,
                    "paddingTop": "50",
                    "paddingRight": "0",
                    "paddingLeft": "0",
                    "paddingBottom": "50",
                    "backgroundImage": {
                        "_id": "65e6cacf71caa6014a076dc0",
                        "folder": "65e6c37371caa6014a076ad2",
                        "name": "smooth-black-paper-textured-background.jpg",
                        "file_details": {
                            "fieldname": "files",
                            "originalname": "smooth-black-paper-textured-background.jpg",
                            "encoding": "7bit",
                            "mimetype": "image/jpeg",
                            "destination": "public/uploads/images",
                            "filename": "1709624015616smooth-black-paper-textured-background.jpg",
                            "path": "public/uploads/images/1709624015616smooth-black-paper-textured-background.jpg",
                            "size": 7268987
                        },
                        "path": "/images/1709624015616smooth-black-paper-textured-background.jpg",
                        "is_active": true,
                        "is_deleted": false,
                        "createdAt": "2024-03-05T07:33:35.901Z",
                        "updatedAt": "2024-03-05T07:33:35.901Z"
                    },
                    "gap": "20",
                    "marginTop": "0",
                    "marginBottom": "0",
                    "marginLeft": "10",
                    "marginRight": "10"
                },
                "1440": {
                    "name": "1440",
                    "gridHeightType": "100vh",
                    "contentWidth": "max-w-7xl",
                    "gridLayout": "5",
                    "hasBackground": false,
                    "paddingTop": "50",
                    "paddingRight": "0",
                    "paddingLeft": "0",
                    "paddingBottom": "50",
                    "backgroundImage": {
                        "_id": "65e6cacf71caa6014a076dc0",
                        "folder": "65e6c37371caa6014a076ad2",
                        "name": "smooth-black-paper-textured-background.jpg",
                        "file_details": {
                            "fieldname": "files",
                            "originalname": "smooth-black-paper-textured-background.jpg",
                            "encoding": "7bit",
                            "mimetype": "image/jpeg",
                            "destination": "public/uploads/images",
                            "filename": "1709624015616smooth-black-paper-textured-background.jpg",
                            "path": "public/uploads/images/1709624015616smooth-black-paper-textured-background.jpg",
                            "size": 7268987
                        },
                        "path": "/images/1709624015616smooth-black-paper-textured-background.jpg",
                        "is_active": true,
                        "is_deleted": false,
                        "createdAt": "2024-03-05T07:33:35.901Z",
                        "updatedAt": "2024-03-05T07:33:35.901Z"
                    },
                    "gap": "30",
                    "marginTop": "0",
                    "marginBottom": "0"
                }
            },
            "image": "/topfeatures.png",
            "gridLayout": "5"
        },
        {
            "id": uuidv4(),
            "name": "customStyle",
            "type": "customStyle",
            "components": [
                {
                    "id": uuidv4(),
                    "elements": [
                        {
                            "name": "image",
                            "image": "/image.png",
                            "id": uuidv4(),
                            "styles": {
                                "320": {
                                    "rowSpan": "1",
                                    "width": "40",
                                    "verticalAlign": "center",
                                    "imgPlacement": "start",
                                    "height": "40",
                                    "paddingLeft": "0",
                                    "marginLeft": "0",
                                    "imgfit": "contain",
                                    "columnSpan": "1",
                                    "marginTop": "0",
                                    "paddingTop": "0"
                                },
                                "425": {
                                    "rowSpan": "1",
                                    "width": "40",
                                    "verticalAlign": "center",
                                    "imgPlacement": "start",
                                    "height": "40",
                                    "paddingLeft": "0",
                                    "marginLeft": "0",
                                    "imgfit": "contain",
                                    "columnSpan": "1",
                                    "marginTop": "0",
                                    "paddingTop": "0"
                                },
                                "768": {
                                    "rowSpan": "1",
                                    "width": "70",
                                    "verticalAlign": "center",
                                    "imgPlacement": "start",
                                    "height": "60",
                                    "paddingLeft": "0",
                                    "marginLeft": "0",
                                    "imgfit": "contain",
                                    "columnSpan": "1",
                                    "marginTop": "0",
                                    "paddingTop": "0"
                                },
                                "1024": {
                                    "rowSpan": "1",
                                    "width": "80",
                                    "verticalAlign": "center",
                                    "imgPlacement": "start",
                                    "height": "80",
                                    "paddingLeft": "0",
                                    "marginLeft": "0",
                                    "imgfit": "contain",
                                    "columnSpan": "1",
                                    "marginTop": "0",
                                    "paddingTop": "0"
                                },
                                "1440": {
                                    "url": {
                                        "_id": "66347a885929cc25cdadd054",
                                        "folder": "65e6c37371caa6014a076ad2",
                                        "name": "Group408.png",
                                        "file_details": {
                                            "fieldname": "files",
                                            "originalname": "Group408.png",
                                            "encoding": "7bit",
                                            "mimetype": "image/png",
                                            "destination": "public/uploads/images",
                                            "filename": "1714715271473Group408.png",
                                            "path": "public/uploads/images/1714715271473Group408.png",
                                            "size": 548584
                                        },
                                        "path": "/images/1714715271473Group408.png",
                                        "is_active": true,
                                        "is_deleted": false,
                                        "createdAt": "2024-05-03T05:47:52.071Z",
                                        "updatedAt": "2024-05-03T05:47:52.071Z"
                                    },
                                    "rowSpan": "1",
                                    "width": "100",
                                    "verticalAlign": "center",
                                    "imgPlacement": "start",
                                    "height": "100",
                                    "paddingLeft": "30",
                                    "marginLeft": "0",
                                    "imgfit": "contain",
                                    "columnSpan": "1",
                                    "marginTop": "0",
                                    "paddingTop": "30"
                                }
                            },
                            "url": {
                                "_id": "66347a885929cc25cdadd054",
                                "folder": "65e6c37371caa6014a076ad2",
                                "name": "Group408.png",
                                "file_details": {
                                    "fieldname": "files",
                                    "originalname": "Group408.png",
                                    "encoding": "7bit",
                                    "mimetype": "image/png",
                                    "destination": "public/uploads/images",
                                    "filename": "1714715271473Group408.png",
                                    "path": "public/uploads/images/1714715271473Group408.png",
                                    "size": 548584
                                },
                                "path": "/images/1714715271473Group408.png",
                                "is_active": true,
                                "is_deleted": false,
                                "createdAt": "2024-05-03T05:47:52.071Z",
                                "updatedAt": "2024-05-03T05:47:52.071Z"
                            }
                        },
                        {
                            "name": "text",
                            "image": "/text.png",
                            "id": uuidv4(),
                            "styles": {
                                "320": {
                                    "content": "FRESH & CLEAN\nAIR FLOW",
                                    "rowSpan": "1",
                                    "verticalAlign": "center",
                                    "textAlign": "start",
                                    "fontStyle": "normal",
                                    "fontSize": "15",
                                    "fontWeight": "600",
                                    "lineHeightType": "custom",
                                    "lineHeight": "20",
                                    "columnSpan": "1",
                                    "paddingTop": "0",
                                    "marginTop": "0"
                                },
                                "425": {
                                    "content": "FRESH & CLEAN\nAIR FLOW",
                                    "rowSpan": "1",
                                    "verticalAlign": "center",
                                    "textAlign": "start",
                                    "fontStyle": "normal",
                                    "fontSize": "15",
                                    "fontWeight": "600",
                                    "lineHeightType": "custom",
                                    "lineHeight": "20",
                                    "columnSpan": "1",
                                    "paddingTop": "0",
                                    "marginTop": "0"
                                },
                                "768": {
                                    "content": "FRESH & CLEAN\nAIR FLOW",
                                    "rowSpan": "1",
                                    "verticalAlign": "center",
                                    "textAlign": "start",
                                    "fontStyle": "normal",
                                    "fontSize": "20",
                                    "fontWeight": "600",
                                    "lineHeightType": "custom",
                                    "lineHeight": "30",
                                    "columnSpan": "1",
                                    "paddingTop": "0",
                                    "marginTop": "0"
                                },
                                "1024": {
                                    "content": "FRESH & CLEAN\nAIR FLOW",
                                    "rowSpan": "1",
                                    "verticalAlign": "center",
                                    "textAlign": "start",
                                    "fontStyle": "normal",
                                    "fontSize": "20",
                                    "fontWeight": "600",
                                    "lineHeightType": "custom",
                                    "lineHeight": "30",
                                    "columnSpan": "1",
                                    "paddingTop": "0",
                                    "marginTop": "0"
                                },
                                "1440": {
                                    "content": "FRESH & CLEAN\nAIR FLOW",
                                    "rowSpan": "1",
                                    "verticalAlign": "center",
                                    "textAlign": "start",
                                    "fontStyle": "normal",
                                    "fontSize": "24",
                                    "fontWeight": "700",
                                    "lineHeightType": "custom",
                                    "lineHeight": "31",
                                    "columnSpan": "1",
                                    "paddingTop": "0",
                                    "marginTop": "30"
                                }
                            },
                            "content": "FRESH & CLEAN\nAIR FLOW"
                        }
                    ],
                    "styles": {
                        "320": {
                            "gridCols": 6,
                            "flexDirection": "column",
                            "display": "grid",
                            "paddingLeft": "32.5",
                            "paddingTop": "10",
                            "gridHeightType": "fit-content",
                            "width": 320
                        },
                        "425": {
                            "gridCols": 7,
                            "flexDirection": "column",
                            "display": "grid",
                            "paddingLeft": "10",
                            "paddingTop": "10",
                            "gridHeightType": "fit-content"
                        },
                        "768": {
                            "flexDirection": "column",
                            "gridCols": 8,
                            "gridHeightType": "fit-content",
                            "paddingLeft": "10",
                            "paddingTop": "10",
                            "display": "grid"
                        },
                        "1024": {
                            "gridCols": 8,
                            "flexDirection": "column",
                            "display": "grid",
                            "paddingLeft": "20",
                            "paddingTop": "20",
                            "gridHeightType": "fit-content"
                        },
                        "1440": {
                            "gridCols": 12,
                            "display": "grid",
                            "gridOverflow": "overflow-visible",
                            "gridWidth": 500,
                            "gridWidthType": "custom",
                            "contentPlacement": "mx-auto",
                            "gridHeightType": "fit-content",
                            "radiusTopLeft": 0,
                            "radiusTopRight": 0,
                            "radiusBottomLeft": 0,
                            "radiusBottomRight": 0,
                            "paddingTop": "0",
                            "paddingBottom": "0",
                            "paddingLeft": "0",
                            "paddingRight": "0",
                            "borderTop": 0,
                            "borderBottom": 0,
                            "borderLeft": 0,
                            "borderRight": 0,
                            "backgroundImage": "",
                            "backgroundColor": "#ffffff",
                            "hasBackground": false,
                            "backgroundRepeat": "no-repeat",
                            "backgroundPosition": "center",
                            "backgroundSize": "cover",
                            "rowSpan": "1",
                            "columnSpan": "1",
                            "gap": 20,
                            "height": 1000,
                            "alignItems": "start",
                            "justifyContent": "start"
                        }
                    },
                    "hasOverlay": false,
                    "overlayColor": "repeating-radial-gradient(ellipse at 54.751% 60.204%, rgba(255,255,255,0)  0%,black  100%)"
                },
                {
                    "id": uuidv4(),
                    "elements": [
                        {
                            "name": "text",
                            "image": "/text.png",
                            "id": uuidv4(),
                            "styles": {
                                "320": {
                                    "content": "Fresh Technology introduces fresh air into the room\nthrough layered purification, making people full of\nvitality.",
                                    "fontSize": "10",
                                    "paddingLeft": "32.5",
                                    "marginLeft": "0",
                                    "paddingBottom": "0",
                                    "textAlign": "start"
                                },
                                "425": {
                                    "content": "Fresh Technology introduces fresh air into the room through \nlayered purification, making people full of vitality.",
                                    "fontSize": "11",
                                    "paddingLeft": "10",
                                    "marginLeft": "0",
                                    "paddingBottom": "0",
                                    "textAlign": "start"
                                },
                                "768": {
                                    "content": "Fresh Technology introduces fresh air into the room through layered purification, making people full of vitality.",
                                    "fontSize": "11",
                                    "paddingLeft": "10",
                                    "marginLeft": "0",
                                    "paddingBottom": "0"
                                },
                                "1024": {
                                    "content": "Fresh Technology introduces fresh air into the room through layered purification, making people full of vitality.",
                                    "marginLeft": "0",
                                    "fontSize": "15",
                                    "paddingLeft": "30",
                                    "paddingBottom": "20"
                                },
                                "1440": {
                                    "content": "Fresh Technology introduces fresh air into the room through layered purification, making people full of vitality.",
                                    "fontSize": "17",
                                    "paddingLeft": "30"
                                }
                            },
                            "content": "Fresh Technology introduces fresh air into the room through layered purification, making people full of vitality."
                        },
                        {
                            "name": "image",
                            "image": "/image.png",
                            "id": uuidv4(),
                            "styles": {
                                "320": {
                                    "width": "360",
                                    "height": "225",
                                    "imgfit": "cover"
                                },
                                "425": {
                                    "width": "425",
                                    "height": "265",
                                    "imgfit": "cover"
                                },
                                "768": {
                                    "width": "670",
                                    "height": "413",
                                    "imgfit": "cover"
                                },
                                "1024": {
                                    "width": "893",
                                    "height": "540",
                                    "imgfit": "cover"
                                },
                                "1440": {
                                    "url": {
                                        "_id": "663b54dd5929cc25cdadf478",
                                        "folder": "65e6c37371caa6014a076ad2",
                                        "name": "Asset2@4x.png",
                                        "file_details": {
                                            "fieldname": "files",
                                            "originalname": "Asset2@4x.png",
                                            "encoding": "7bit",
                                            "mimetype": "image/png",
                                            "destination": "public/uploads/images",
                                            "filename": "1715164381804Asset2@4x.png",
                                            "path": "public/uploads/images/1715164381804Asset2@4x.png",
                                            "size": 1534659
                                        },
                                        "path": "/images/1715164381804Asset2@4x.png",
                                        "is_active": true,
                                        "is_deleted": false,
                                        "createdAt": "2024-05-08T10:33:01.997Z",
                                        "updatedAt": "2024-05-08T10:33:01.997Z"
                                    },
                                    "width": "1278",
                                    "height": "800",
                                    "imgfit": "cover"
                                }
                            },
                            "url": {
                                "_id": "663b54dd5929cc25cdadf478",
                                "folder": "65e6c37371caa6014a076ad2",
                                "name": "Asset2@4x.png",
                                "file_details": {
                                    "fieldname": "files",
                                    "originalname": "Asset2@4x.png",
                                    "encoding": "7bit",
                                    "mimetype": "image/png",
                                    "destination": "public/uploads/images",
                                    "filename": "1715164381804Asset2@4x.png",
                                    "path": "public/uploads/images/1715164381804Asset2@4x.png",
                                    "size": 1534659
                                },
                                "path": "/images/1715164381804Asset2@4x.png",
                                "is_active": true,
                                "is_deleted": false,
                                "createdAt": "2024-05-08T10:33:01.997Z",
                                "updatedAt": "2024-05-08T10:33:01.997Z"
                            }
                        }
                    ],
                    "styles": {
                        "320": {
                            "flexDirection": "column",
                            "gap": 10,
                            "gridHeightType": "fit-content",
                            "gridWidthType": "custom",
                            "width": 320
                        },
                        "425": {
                            "flexDirection": "column",
                            "gap": 10,
                            "gridHeightType": "fit-content",
                            "gridWidthType": "custom",
                            "width": 320
                        },
                        "768": {
                            "flexDirection": "column",
                            "gridHeightType": "fit-content",
                            "gap": 10
                        },
                        "1024": {
                            "flexDirection": "column",
                            "gridHeightType": "fit-content"
                        },
                        "1440": {
                            "flexDirection": "column",
                            "display": "flex",
                            "gridOverflow": "overflow-visible",
                            "gridWidth": 500,
                            "gridWidthType": "custom",
                            "contentPlacement": "mx-auto",
                            "gridHeightType": "fit-content",
                            "radiusTopLeft": 0,
                            "radiusTopRight": 0,
                            "radiusBottomLeft": 0,
                            "radiusBottomRight": 0,
                            "paddingTop": 0,
                            "paddingBottom": 0,
                            "paddingLeft": 0,
                            "paddingRight": 0,
                            "borderTop": 0,
                            "borderBottom": 0,
                            "borderLeft": 0,
                            "borderRight": 0,
                            "backgroundColor": "",
                            "hasBackground": false,
                            "backgroundRepeat": "no-repeat",
                            "backgroundPosition": "center",
                            "backgroundSize": "cover",
                            "rowSpan": "1",
                            "columnSpan": "1",
                            "gap": 10,
                            "height": 500,
                            "alignItems": "start",
                            "justifyContent": "start"
                        }
                    },
                    "hasOverlay": false,
                    "overlayColor": ""
                }
            ],
            "styles": {
                "320": {
                    "name": "1440",
                    "gridHeightType": "fit-content",
                    "contentWidth": "w-full",
                    "height": 1000,
                    "marginTop": "0",
                    "marginBottom": "0",
                    "gap": "10",
                    "gridLayout": "1",
                    "paddingTop": "30",
                    "paddingBottom": "30"
                },
                "425": {
                    "name": "1440",
                    "gridHeightType": "fit-content",
                    "contentWidth": "max-w-md",
                    "height": 1000,
                    "marginTop": "0",
                    "marginBottom": "0",
                    "gap": "10",
                    "gridLayout": "1",
                    "paddingTop": "30",
                    "paddingBottom": "30"
                },
                "768": {
                    "name": "1440",
                    "gridHeightType": "fit-content",
                    "contentWidth": "max-w-2xl",
                    "height": 1000,
                    "marginTop": "0",
                    "marginBottom": "0",
                    "gap": "10",
                    "gridLayout": "1",
                    "paddingTop": "30",
                    "paddingBottom": "30"
                },
                "1024": {
                    "name": "1440",
                    "gridHeightType": "fit-content",
                    "contentWidth": "max-w-4xl",
                    "height": 1000,
                    "marginTop": "0",
                    "marginBottom": "0",
                    "gridLayout": "1",
                    "gap": "20",
                    "paddingTop": "40",
                    "paddingBottom": "40"
                },
                "1440": {
                    "name": "1440",
                    "gridHeightType": "fit-content",
                    "contentWidth": "max-w-7xl",
                    "height": 1000,
                    "marginTop": "0",
                    "marginBottom": "0",
                    "gap": "10",
                    "paddingTop": "50",
                    "paddingBottom": "50"
                }
            },
            "image": "/freshandclean.png",
            "gridLayout": "1"
        },
        {
            "id": uuidv4(),
            "name": "customStyle",
            "type": "customStyle",
            "components": [
                {
                    "id": uuidv4(),
                    "elements": [
                        {
                            "name": "image",
                            "image": "/image.png",
                            "id": uuidv4(),
                            "styles": {
                                "320": {
                                    "height": "30",
                                    "width": "30",
                                    "imgPlacement": "center"
                                },
                                "425": {
                                    "height": "40",
                                    "width": "40",
                                    "imgPlacement": "center"
                                },
                                "768": {
                                    "height": "40",
                                    "width": "40",
                                    "imgPlacement": "start"
                                },
                                "1024": {
                                    "height": "50",
                                    "width": "50",
                                    "imgPlacement": "start"
                                },
                                "1440": {
                                    "url": {
                                        "_id": "66347a755929cc25cdadd03f",
                                        "folder": "65e6c37371caa6014a076ad2",
                                        "name": "11.png",
                                        "file_details": {
                                            "fieldname": "files",
                                            "originalname": "11.png",
                                            "encoding": "7bit",
                                            "mimetype": "image/png",
                                            "destination": "public/uploads/images",
                                            "filename": "171471524956911.png",
                                            "path": "public/uploads/images/171471524956911.png",
                                            "size": 520152
                                        },
                                        "path": "/images/171471524956911.png",
                                        "is_active": true,
                                        "is_deleted": false,
                                        "createdAt": "2024-05-03T05:47:33.054Z",
                                        "updatedAt": "2024-05-03T05:47:33.054Z"
                                    },
                                    "height": "50",
                                    "width": "50",
                                    "imgPlacement": "start"
                                }
                            },
                            "url": {
                                "_id": "66347a755929cc25cdadd03f",
                                "folder": "65e6c37371caa6014a076ad2",
                                "name": "11.png",
                                "file_details": {
                                    "fieldname": "files",
                                    "originalname": "11.png",
                                    "encoding": "7bit",
                                    "mimetype": "image/png",
                                    "destination": "public/uploads/images",
                                    "filename": "171471524956911.png",
                                    "path": "public/uploads/images/171471524956911.png",
                                    "size": 520152
                                },
                                "path": "/images/171471524956911.png",
                                "is_active": true,
                                "is_deleted": false,
                                "createdAt": "2024-05-03T05:47:33.054Z",
                                "updatedAt": "2024-05-03T05:47:33.054Z"
                            }
                        },
                        {
                            "name": "text",
                            "image": "/text.png",
                            "id": uuidv4(),
                            "styles": {
                                "320": {
                                    "content": "ANTI-GERMS",
                                    "fontSize": "12",
                                    "fontWeight": "700",
                                    "textAlign": "center",
                                    "lineHeightType": "custom",
                                    "lineHeight": "12"
                                },
                                "425": {
                                    "content": "ANTI-GERMS",
                                    "fontSize": "18",
                                    "fontWeight": "700",
                                    "textAlign": "center"
                                },
                                "768": {
                                    "content": "ANTI-GERMS",
                                    "fontSize": "18",
                                    "fontWeight": "700"
                                },
                                "1024": {
                                    "content": "ANTI-GERMS",
                                    "fontSize": "25",
                                    "fontWeight": "700"
                                },
                                "1440": {
                                    "content": "ANTI-GERMS",
                                    "fontSize": "30",
                                    "fontWeight": "700"
                                }
                            },
                            "content": "ANTI-GERMS"
                        },
                        {
                            "name": "text",
                            "image": "/text.png",
                            "id": uuidv4(),
                            "styles": {
                                "320": {
                                    "content": "The Dual Filtration system thoroughly eliminates\nharmful substances throughthe 2 steps, providing\n fresh and clean airto you.",
                                    "fontSize": "11",
                                    "lineHeightType": "custom",
                                    "lineHeight": "12",
                                    "textAlign": "center"
                                },
                                "425": {
                                    "content": "The Dual Filtration system thoroughly\neliminates harmful substances through\nthe 2 steps, providing fresh and clean air\nto you.",
                                    "fontSize": "11",
                                    "lineHeightType": "custom",
                                    "lineHeight": "15",
                                    "textAlign": "center"
                                },
                                "768": {
                                    "content": "The Dual Filtration system thoroughly\neliminates harmful substances through\nthe 2 steps, providing fresh and clean air\nto you.",
                                    "fontSize": "11",
                                    "lineHeightType": "custom",
                                    "lineHeight": "15"
                                },
                                "1024": {
                                    "content": "The Dual Filtration system thoroughly\neliminates harmful substances through\nthe 2 steps, providing fresh and clean air\nto you.",
                                    "fontSize": "12",
                                    "lineHeightType": "custom",
                                    "lineHeight": "15"
                                },
                                "1440": {
                                    "content": "The Dual Filtration system thoroughly\neliminates harmful substances through\nthe 2 steps, providing fresh and clean air\nto you.",
                                    "fontSize": "14",
                                    "lineHeightType": "custom",
                                    "lineHeight": "15"
                                }
                            },
                            "content": "The Dual Filtration system thoroughly\neliminates harmful substances through\nthe 2 steps, providing fresh and clean air\nto you."
                        }
                    ],
                    "styles": {
                        "320": {
                            "flexDirection": "column",
                            "height": 150,
                            "justifyContent": "center",
                            "paddingLeft": "0",
                            "gap": 5,
                            "gridHeightType": "fit-content",
                            "borderTop": "0"
                        },
                        "425": {
                            "flexDirection": "column",
                            "height": 300,
                            "justifyContent": "center",
                            "paddingLeft": "0",
                            "gap": 5,
                            "gridHeightType": "fit-content"
                        },
                        "768": {
                            "flexDirection": "column",
                            "height": 300,
                            "justifyContent": "center",
                            "paddingLeft": "50",
                            "gap": 5
                        },
                        "1024": {
                            "flexDirection": "column",
                            "display": "flex",
                            "gridOverflow": "overflow-visible",
                            "gridWidth": 500,
                            "gridWidthType": "custom",
                            "contentPlacement": "mx-auto",
                            "gridHeightType": "custom",
                            "radiusTopLeft": 0,
                            "radiusTopRight": 0,
                            "radiusBottomLeft": 0,
                            "radiusBottomRight": 0,
                            "paddingTop": 0,
                            "paddingBottom": 0,
                            "paddingLeft": "100",
                            "paddingRight": 0,
                            "borderTop": 0,
                            "borderBottom": 0,
                            "borderLeft": 0,
                            "borderRight": 0,
                            "backgroundColor": "",
                            "hasBackground": false,
                            "backgroundRepeat": "no-repeat",
                            "backgroundPosition": "center",
                            "backgroundSize": "cover",
                            "rowSpan": "1",
                            "columnSpan": "1",
                            "gap": 1,
                            "height": 400,
                            "alignItems": "start",
                            "justifyContent": "center"
                        },
                        "1440": {
                            "flexDirection": "column",
                            "display": "flex",
                            "gridOverflow": "overflow-visible",
                            "gridWidth": 500,
                            "gridWidthType": "custom",
                            "contentPlacement": "mx-auto",
                            "gridHeightType": "custom",
                            "radiusTopLeft": 0,
                            "radiusTopRight": 0,
                            "radiusBottomLeft": 0,
                            "radiusBottomRight": 0,
                            "paddingTop": 0,
                            "paddingBottom": 0,
                            "paddingLeft": "200",
                            "paddingRight": 0,
                            "borderTop": 0,
                            "borderBottom": 0,
                            "borderLeft": 0,
                            "borderRight": 0,
                            "backgroundColor": "",
                            "hasBackground": false,
                            "backgroundRepeat": "no-repeat",
                            "backgroundPosition": "center",
                            "backgroundSize": "cover",
                            "rowSpan": "1",
                            "columnSpan": "1",
                            "gap": 1,
                            "height": 500,
                            "alignItems": "start",
                            "justifyContent": "center"
                        }
                    },
                    "hasOverlay": false,
                    "overlayColor": ""
                },
                {
                    "id": uuidv4(),
                    "elements": [
                        {
                            "name": "image",
                            "image": "/image.png",
                            "id": uuidv4(),
                            "styles": {
                                "320": {
                                    "width": "320",
                                    "height": "200"
                                },
                                "425": {
                                    "width": "300",
                                    "height": "200"
                                },
                                "768": {
                                    "width": "300",
                                    "height": "200"
                                },
                                "1024": {
                                    "width": "434",
                                    "height": "295"
                                },
                                "1440": {
                                    "url": {
                                        "_id": "663b54de5929cc25cdadf47a",
                                        "folder": "65e6c37371caa6014a076ad2",
                                        "name": "Asset3@4x.png",
                                        "file_details": {
                                            "fieldname": "files",
                                            "originalname": "Asset3@4x.png",
                                            "encoding": "7bit",
                                            "mimetype": "image/png",
                                            "destination": "public/uploads/images",
                                            "filename": "1715164381853Asset3@4x.png",
                                            "path": "public/uploads/images/1715164381853Asset3@4x.png",
                                            "size": 882417
                                        },
                                        "path": "/images/1715164381853Asset3@4x.png",
                                        "is_active": true,
                                        "is_deleted": false,
                                        "createdAt": "2024-05-08T10:33:02.057Z",
                                        "updatedAt": "2024-05-08T10:33:02.057Z"
                                    },
                                    "width": "639",
                                    "height": "400"
                                }
                            },
                            "url": {
                                "_id": "663b54de5929cc25cdadf47a",
                                "folder": "65e6c37371caa6014a076ad2",
                                "name": "Asset3@4x.png",
                                "file_details": {
                                    "fieldname": "files",
                                    "originalname": "Asset3@4x.png",
                                    "encoding": "7bit",
                                    "mimetype": "image/png",
                                    "destination": "public/uploads/images",
                                    "filename": "1715164381853Asset3@4x.png",
                                    "path": "public/uploads/images/1715164381853Asset3@4x.png",
                                    "size": 882417
                                },
                                "path": "/images/1715164381853Asset3@4x.png",
                                "is_active": true,
                                "is_deleted": false,
                                "createdAt": "2024-05-08T10:33:02.057Z",
                                "updatedAt": "2024-05-08T10:33:02.057Z"
                            }
                        }
                    ],
                    "styles": {
                        "320": {
                            "flexDirection": "column",
                            "height": 225,
                            "justifyContent": "start",
                            "width": 500,
                            "gridOverflow": "overflow-hidden"
                        },
                        "425": {
                            "flexDirection": "column",
                            "height": 250,
                            "justifyContent": "start"
                        },
                        "768": {
                            "flexDirection": "column",
                            "height": 300,
                            "justifyContent": "center"
                        },
                        "1024": {
                            "flexDirection": "column",
                            "height": 400,
                            "justifyContent": "center"
                        },
                        "1440": {
                            "flexDirection": "column",
                            "display": "flex",
                            "gridOverflow": "overflow-visible",
                            "gridWidth": 500,
                            "gridWidthType": "custom",
                            "contentPlacement": "mx-auto",
                            "gridHeightType": "custom",
                            "radiusTopLeft": 0,
                            "radiusTopRight": 0,
                            "radiusBottomLeft": 0,
                            "radiusBottomRight": 0,
                            "paddingTop": 0,
                            "paddingBottom": 0,
                            "paddingLeft": 0,
                            "paddingRight": 0,
                            "borderTop": 0,
                            "borderBottom": 0,
                            "borderLeft": 0,
                            "borderRight": 0,
                            "backgroundColor": "",
                            "hasBackground": false,
                            "backgroundRepeat": "no-repeat",
                            "backgroundPosition": "center",
                            "backgroundSize": "cover",
                            "rowSpan": "1",
                            "columnSpan": "1",
                            "gap": 1,
                            "height": 500,
                            "alignItems": "start",
                            "justifyContent": "center"
                        }
                    },
                    "hasOverlay": false,
                    "overlayColor": ""
                },
                {
                    "id": uuidv4(),
                    "elements": [
                        {
                            "name": "image",
                            "image": "/image.png",
                            "id": uuidv4(),
                            "styles": {
                                "320": {
                                    "height": "200",
                                    "width": "320",
                                    "imgfit": "contain",
                                    "verticalAlign": "bottom"
                                },
                                "425": {
                                    "height": "200",
                                    "width": "300"
                                },
                                "768": {
                                    "height": "200",
                                    "width": "300"
                                },
                                "1024": {
                                    "height": "295",
                                    "width": "434"
                                },
                                "1440": {
                                    "url": {
                                        "_id": "663b54de5929cc25cdadf47c",
                                        "folder": "65e6c37371caa6014a076ad2",
                                        "name": "Asset4@4x.png",
                                        "file_details": {
                                            "fieldname": "files",
                                            "originalname": "Asset4@4x.png",
                                            "encoding": "7bit",
                                            "mimetype": "image/png",
                                            "destination": "public/uploads/images",
                                            "filename": "1715164381875Asset4@4x.png",
                                            "path": "public/uploads/images/1715164381875Asset4@4x.png",
                                            "size": 284874
                                        },
                                        "path": "/images/1715164381875Asset4@4x.png",
                                        "is_active": true,
                                        "is_deleted": false,
                                        "createdAt": "2024-05-08T10:33:02.107Z",
                                        "updatedAt": "2024-05-08T10:33:02.107Z"
                                    },
                                    "height": "400",
                                    "width": "639"
                                }
                            },
                            "url": {
                                "_id": "663b54de5929cc25cdadf47c",
                                "folder": "65e6c37371caa6014a076ad2",
                                "name": "Asset4@4x.png",
                                "file_details": {
                                    "fieldname": "files",
                                    "originalname": "Asset4@4x.png",
                                    "encoding": "7bit",
                                    "mimetype": "image/png",
                                    "destination": "public/uploads/images",
                                    "filename": "1715164381875Asset4@4x.png",
                                    "path": "public/uploads/images/1715164381875Asset4@4x.png",
                                    "size": 284874
                                },
                                "path": "/images/1715164381875Asset4@4x.png",
                                "is_active": true,
                                "is_deleted": false,
                                "createdAt": "2024-05-08T10:33:02.107Z",
                                "updatedAt": "2024-05-08T10:33:02.107Z"
                            }
                        }
                    ],
                    "styles": {
                        "320": {
                            "flexDirection": "column",
                            "height": 225,
                            "justifyContent": "center",
                            "gridOverflow": "overflow-hidden"
                        },
                        "425": {
                            "flexDirection": "column",
                            "height": 250,
                            "justifyContent": "end"
                        },
                        "768": {
                            "flexDirection": "column",
                            "height": 300,
                            "justifyContent": "center"
                        },
                        "1024": {
                            "flexDirection": "column",
                            "height": 400,
                            "justifyContent": "center"
                        },
                        "1440": {
                            "flexDirection": "column",
                            "display": "flex",
                            "gridOverflow": "overflow-visible",
                            "gridWidth": 500,
                            "gridWidthType": "custom",
                            "contentPlacement": "mx-auto",
                            "gridHeightType": "custom",
                            "radiusTopLeft": 0,
                            "radiusTopRight": 0,
                            "radiusBottomLeft": 0,
                            "radiusBottomRight": 0,
                            "paddingTop": 0,
                            "paddingBottom": 0,
                            "paddingLeft": 0,
                            "paddingRight": 0,
                            "borderTop": 0,
                            "borderBottom": 0,
                            "borderLeft": 0,
                            "borderRight": 0,
                            "backgroundColor": "",
                            "hasBackground": false,
                            "backgroundRepeat": "no-repeat",
                            "backgroundPosition": "center",
                            "backgroundSize": "cover",
                            "rowSpan": "1",
                            "columnSpan": "1",
                            "gap": 1,
                            "height": 500,
                            "alignItems": "start",
                            "justifyContent": "center"
                        }
                    },
                    "hasOverlay": false,
                    "overlayColor": ""
                },
                {
                    "id": uuidv4(),
                    "elements": [
                        {
                            "name": "image",
                            "image": "/image.png",
                            "id": uuidv4(),
                            "styles": {
                                "320": {
                                    "height": "30",
                                    "width": "30",
                                    "imgPlacement": "center"
                                },
                                "425": {
                                    "height": "40",
                                    "width": "40",
                                    "imgPlacement": "center"
                                },
                                "768": {
                                    "height": "40",
                                    "width": "40",
                                    "imgPlacement": "start"
                                },
                                "1024": {
                                    "height": "50",
                                    "width": "50",
                                    "imgPlacement": "start"
                                },
                                "1440": {
                                    "url": {
                                        "_id": "66347a885929cc25cdadd05c",
                                        "folder": "65e6c37371caa6014a076ad2",
                                        "name": "Group415.png",
                                        "file_details": {
                                            "fieldname": "files",
                                            "originalname": "Group415.png",
                                            "encoding": "7bit",
                                            "mimetype": "image/png",
                                            "destination": "public/uploads/images",
                                            "filename": "1714715271515Group415.png",
                                            "path": "public/uploads/images/1714715271515Group415.png",
                                            "size": 531910
                                        },
                                        "path": "/images/1714715271515Group415.png",
                                        "is_active": true,
                                        "is_deleted": false,
                                        "createdAt": "2024-05-03T05:47:52.267Z",
                                        "updatedAt": "2024-05-03T05:47:52.267Z"
                                    },
                                    "height": "50",
                                    "width": "50",
                                    "imgPlacement": "start"
                                }
                            },
                            "url": {
                                "_id": "66347a885929cc25cdadd05c",
                                "folder": "65e6c37371caa6014a076ad2",
                                "name": "Group415.png",
                                "file_details": {
                                    "fieldname": "files",
                                    "originalname": "Group415.png",
                                    "encoding": "7bit",
                                    "mimetype": "image/png",
                                    "destination": "public/uploads/images",
                                    "filename": "1714715271515Group415.png",
                                    "path": "public/uploads/images/1714715271515Group415.png",
                                    "size": 531910
                                },
                                "path": "/images/1714715271515Group415.png",
                                "is_active": true,
                                "is_deleted": false,
                                "createdAt": "2024-05-03T05:47:52.267Z",
                                "updatedAt": "2024-05-03T05:47:52.267Z"
                            }
                        },
                        {
                            "name": "text",
                            "image": "/text.png",
                            "id": uuidv4(),
                            "styles": {
                                "320": {
                                    "content": "TWIN ROTARY COMPRESSOR",
                                    "fontSize": "12",
                                    "fontWeight": "700",
                                    "textAlign": "center",
                                    "lineHeightType": "custom",
                                    "lineHeight": "12"
                                },
                                "425": {
                                    "content": "TWIN ROTARY COMPRESSOR",
                                    "fontSize": "18",
                                    "fontWeight": "700",
                                    "textAlign": "center"
                                },
                                "768": {
                                    "content": "TWIN ROTARY COMPRESSOR",
                                    "fontSize": "18",
                                    "fontWeight": "700"
                                },
                                "1024": {
                                    "content": "TWIN ROTARY COMPRESSOR",
                                    "fontSize": "25",
                                    "fontWeight": "700"
                                },
                                "1440": {
                                    "content": "TWIN ROTARY COMPRESSOR",
                                    "fontSize": "30",
                                    "fontWeight": "700"
                                }
                            },
                            "content": "TWIN ROTARY COMPRESSOR"
                        },
                        {
                            "name": "text",
                            "image": "/text.png",
                            "id": uuidv4(),
                            "styles": {
                                "320": {
                                    "content": "The Twin Rotary Compressor system rotating with 180\nsymmetrical balance, which ensures low vibration \n& noise due to small torque.",
                                    "fontSize": "11",
                                    "lineHeightType": "custom",
                                    "lineHeight": "12",
                                    "textAlign": "center"
                                },
                                "425": {
                                    "content": "The Twin Rotary Compressor system rotating\nwith 180 symmetrical balance, which ensures\nlow vibration & noise due to small torque.",
                                    "fontSize": "11",
                                    "lineHeightType": "custom",
                                    "lineHeight": "15",
                                    "textAlign": "center"
                                },
                                "768": {
                                    "content": "The Twin Rotary Compressor system rotating\nwith 180 symmetrical balance, which ensures\nlow vibration & noise due to small torque.",
                                    "fontSize": "11",
                                    "lineHeightType": "custom",
                                    "lineHeight": "15"
                                },
                                "1024": {
                                    "content": "The Twin Rotary Compressor system rotating\nwith 180 symmetrical balance, which ensures\nlow vibration & noise due to small torque.",
                                    "fontSize": "12",
                                    "lineHeightType": "custom",
                                    "lineHeight": "15"
                                },
                                "1440": {
                                    "content": "The Twin Rotary Compressor system rotating\nwith 180 symmetrical balance, which ensures\nlow vibration & noise due to small torque.",
                                    "fontSize": "14",
                                    "lineHeightType": "custom",
                                    "lineHeight": "15"
                                }
                            },
                            "content": "The Twin Rotary Compressor system rotating\nwith 180 symmetrical balance, which ensures\nlow vibration & noise due to small torque."
                        }
                    ],
                    "styles": {
                        "320": {
                            "flexDirection": "column",
                            "paddingLeft": "0",
                            "justifyContent": "center",
                            "gap": 5,
                            "height": 150,
                            "gridHeightType": "fit-content"
                        },
                        "425": {
                            "flexDirection": "column",
                            "paddingLeft": "0",
                            "justifyContent": "center",
                            "gap": 5,
                            "height": 300,
                            "gridHeightType": "fit-content"
                        },
                        "768": {
                            "flexDirection": "column",
                            "paddingLeft": "30",
                            "justifyContent": "center",
                            "gap": 5,
                            "height": 300
                        },
                        "1024": {
                            "flexDirection": "column",
                            "display": "flex",
                            "gridOverflow": "overflow-visible",
                            "gridWidth": 500,
                            "gridWidthType": "custom",
                            "contentPlacement": "mx-auto",
                            "gridHeightType": "custom",
                            "radiusTopLeft": 0,
                            "radiusTopRight": 0,
                            "radiusBottomLeft": 0,
                            "radiusBottomRight": 0,
                            "paddingTop": 0,
                            "paddingBottom": 0,
                            "paddingLeft": "40",
                            "paddingRight": 0,
                            "borderTop": 0,
                            "borderBottom": 0,
                            "borderLeft": 0,
                            "borderRight": 0,
                            "backgroundColor": "",
                            "hasBackground": false,
                            "backgroundRepeat": "no-repeat",
                            "backgroundPosition": "center",
                            "backgroundSize": "cover",
                            "rowSpan": "1",
                            "columnSpan": "1",
                            "gap": 1,
                            "height": 400,
                            "alignItems": "start",
                            "justifyContent": "center"
                        },
                        "1440": {
                            "flexDirection": "column",
                            "display": "flex",
                            "gridOverflow": "overflow-visible",
                            "gridWidth": 500,
                            "gridWidthType": "custom",
                            "contentPlacement": "mx-auto",
                            "gridHeightType": "custom",
                            "radiusTopLeft": 0,
                            "radiusTopRight": 0,
                            "radiusBottomLeft": 0,
                            "radiusBottomRight": 0,
                            "paddingTop": 0,
                            "paddingBottom": 0,
                            "paddingLeft": "40",
                            "paddingRight": 0,
                            "borderTop": 0,
                            "borderBottom": 0,
                            "borderLeft": 0,
                            "borderRight": 0,
                            "backgroundColor": "",
                            "hasBackground": false,
                            "backgroundRepeat": "no-repeat",
                            "backgroundPosition": "center",
                            "backgroundSize": "cover",
                            "rowSpan": "1",
                            "columnSpan": "1",
                            "gap": 1,
                            "height": 500,
                            "alignItems": "start",
                            "justifyContent": "center"
                        }
                    },
                    "hasOverlay": false,
                    "overlayColor": ""
                }
            ],
            "styles": {
                "320": {
                    "name": "1440",
                    "gridHeightType": "fit-content",
                    "marginTop": "0",
                    "marginBottom": "0",
                    "gridLayout": "1",
                    "gap": "10",
                    "contentWidth": "max-w-sm",
                    "paddingTop": "30",
                    "paddingBottom": "30"
                },
                "425": {
                    "name": "1440",
                    "gridHeightType": "fit-content",
                    "marginTop": "0",
                    "marginBottom": "0",
                    "gridLayout": "1",
                    "gap": "5",
                    "contentWidth": "max-w-sm",
                    "paddingTop": "30",
                    "paddingBottom": "30"
                },
                "768": {
                    "name": "1440",
                    "gridHeightType": "fit-content",
                    "marginTop": "0",
                    "marginBottom": "0",
                    "gridLayout": "2",
                    "gap": "20",
                    "contentWidth": "max-w-2xl",
                    "paddingTop": "30",
                    "paddingBottom": "30"
                },
                "1024": {
                    "name": "1440",
                    "gridHeightType": "fit-content",
                    "marginTop": "0",
                    "marginBottom": "0",
                    "gridLayout": "2",
                    "gap": "20",
                    "contentWidth": "max-w-4xl",
                    "paddingTop": "40",
                    "paddingBottom": "40"
                },
                "1440": {
                    "name": "1440",
                    "gridHeightType": "fit-content",
                    "marginTop": "0",
                    "marginBottom": "0",
                    "gridLayout": "2",
                    "gap": "20",
                    "paddingTop": "50",
                    "paddingBottom": "50"
                }
            },
            "image": "/antigerms.png",
            "gridLayout": "1"
        },
        {
            "id": uuidv4(),
            "name": "customStyle",
            "type": "customStyle",
            "components": [
                {
                    "id": uuidv4(),
                    "elements": [
                        {
                            "name": "image",
                            "image": "/image.png",
                            "id": uuidv4(),
                            "styles": {
                                "320": {
                                    "height": "40",
                                    "width": "40",
                                    "imgPlacement": "center"
                                },
                                "425": {
                                    "height": "40",
                                    "width": "40",
                                    "imgPlacement": "center"
                                },
                                "768": {
                                    "height": "40",
                                    "width": "40",
                                    "imgPlacement": "start"
                                },
                                "1024": {
                                    "height": "50",
                                    "width": "50",
                                    "imgPlacement": "start"
                                },
                                "1440": {
                                    "url": {
                                        "_id": "66347a885929cc25cdadd062",
                                        "folder": "65e6c37371caa6014a076ad2",
                                        "name": "Group420.png",
                                        "file_details": {
                                            "fieldname": "files",
                                            "originalname": "Group420.png",
                                            "encoding": "7bit",
                                            "mimetype": "image/png",
                                            "destination": "public/uploads/images",
                                            "filename": "1714715271546Group420.png",
                                            "path": "public/uploads/images/1714715271546Group420.png",
                                            "size": 556479
                                        },
                                        "path": "/images/1714715271546Group420.png",
                                        "is_active": true,
                                        "is_deleted": false,
                                        "createdAt": "2024-05-03T05:47:52.413Z",
                                        "updatedAt": "2024-05-03T05:47:52.413Z"
                                    },
                                    "height": "50",
                                    "width": "50",
                                    "imgPlacement": "start"
                                }
                            },
                            "url": {
                                "_id": "66347a885929cc25cdadd062",
                                "folder": "65e6c37371caa6014a076ad2",
                                "name": "Group420.png",
                                "file_details": {
                                    "fieldname": "files",
                                    "originalname": "Group420.png",
                                    "encoding": "7bit",
                                    "mimetype": "image/png",
                                    "destination": "public/uploads/images",
                                    "filename": "1714715271546Group420.png",
                                    "path": "public/uploads/images/1714715271546Group420.png",
                                    "size": 556479
                                },
                                "path": "/images/1714715271546Group420.png",
                                "is_active": true,
                                "is_deleted": false,
                                "createdAt": "2024-05-03T05:47:52.413Z",
                                "updatedAt": "2024-05-03T05:47:52.413Z"
                            }
                        },
                        {
                            "name": "text",
                            "image": "/text.png",
                            "id": uuidv4(),
                            "styles": {
                                "320": {
                                    "content": "TURBO MODE",
                                    "fontSize": "20",
                                    "fontWeight": "700",
                                    "textAlign": "center"
                                },
                                "425": {
                                    "content": "TURBO MODE",
                                    "fontSize": "20",
                                    "fontWeight": "700",
                                    "textAlign": "center"
                                },
                                "768": {
                                    "content": "TURBO MODE",
                                    "fontSize": "20",
                                    "fontWeight": "700"
                                },
                                "1024": {
                                    "content": "TURBO MODE",
                                    "fontSize": "30",
                                    "fontWeight": "700"
                                },
                                "1440": {
                                    "content": "TURBO MODE",
                                    "fontSize": "30",
                                    "fontWeight": "700"
                                }
                            },
                            "content": "TURBO MODE"
                        },
                        {
                            "name": "text",
                            "image": "/text.png",
                            "id": uuidv4(),
                            "styles": {
                                "320": {
                                    "content": "Turbo function is helpful to cool or heat\nthe room quickly and effectively by \noperatingat the maximum fan speed.",
                                    "fontSize": "11",
                                    "lineHeightType": "custom",
                                    "lineHeight": "15",
                                    "textAlign": "center"
                                },
                                "425": {
                                    "content": "Turbo function is helpful to cool or heat\nthe room quickly and effectively by \noperatingat the maximum fan speed.",
                                    "fontSize": "11",
                                    "lineHeightType": "custom",
                                    "lineHeight": "15",
                                    "textAlign": "center"
                                },
                                "768": {
                                    "content": "Turbo function is helpful to cool or heat\nthe room quickly and effectively by \noperatingat the maximum fan speed.",
                                    "fontSize": "11",
                                    "lineHeightType": "custom",
                                    "lineHeight": "15"
                                },
                                "1024": {
                                    "content": "Turbo function is helpful to cool or heat\nthe room quickly and effectively by operating\nat the maximum fan speed.",
                                    "fontSize": "13",
                                    "lineHeightType": "custom",
                                    "lineHeight": "15"
                                },
                                "1440": {
                                    "content": "Turbo function is helpful to cool or heat\nthe room quickly and effectively by operating\nat the maximum fan speed.",
                                    "fontSize": "14",
                                    "lineHeightType": "custom",
                                    "lineHeight": "15"
                                }
                            },
                            "content": "Turbo function is helpful to cool or heat\nthe room quickly and effectively by operating\nat the maximum fan speed."
                        }
                    ],
                    "styles": {
                        "320": {
                            "flexDirection": "column",
                            "gap": 5,
                            "justifyContent": "center",
                            "height": 300,
                            "paddingLeft": "0",
                            "gridHeightType": "fit-content",
                            "width": 500,
                            "gridWidthType": "custom"
                        },
                        "425": {
                            "flexDirection": "column",
                            "gap": 5,
                            "justifyContent": "center",
                            "height": 300,
                            "paddingLeft": "0",
                            "gridHeightType": "fit-content"
                        },
                        "768": {
                            "flexDirection": "column",
                            "gap": 5,
                            "justifyContent": "center",
                            "height": 300,
                            "paddingLeft": "50"
                        },
                        "1024": {
                            "flexDirection": "column",
                            "display": "flex",
                            "gridOverflow": "overflow-visible",
                            "gridWidth": 500,
                            "gridWidthType": "custom",
                            "contentPlacement": "mx-auto",
                            "gridHeightType": "custom",
                            "radiusTopLeft": 0,
                            "radiusTopRight": 0,
                            "radiusBottomLeft": 0,
                            "radiusBottomRight": 0,
                            "paddingTop": 0,
                            "paddingBottom": 0,
                            "paddingLeft": "100",
                            "paddingRight": 0,
                            "borderTop": 0,
                            "borderBottom": 0,
                            "borderLeft": 0,
                            "borderRight": 0,
                            "backgroundImage": "",
                            "backgroundColor": "#ffffff",
                            "hasBackground": false,
                            "backgroundRepeat": "no-repeat",
                            "backgroundPosition": "center",
                            "backgroundSize": "cover",
                            "rowSpan": "1",
                            "columnSpan": "1",
                            "gap": 1,
                            "height": 400,
                            "alignItems": "start",
                            "justifyContent": "center"
                        },
                        "1440": {
                            "flexDirection": "column",
                            "display": "flex",
                            "gridOverflow": "overflow-visible",
                            "gridWidth": 500,
                            "gridWidthType": "custom",
                            "contentPlacement": "mx-auto",
                            "gridHeightType": "custom",
                            "radiusTopLeft": 0,
                            "radiusTopRight": 0,
                            "radiusBottomLeft": 0,
                            "radiusBottomRight": 0,
                            "paddingTop": 0,
                            "paddingBottom": 0,
                            "paddingLeft": "200",
                            "paddingRight": 0,
                            "borderTop": 0,
                            "borderBottom": 0,
                            "borderLeft": 0,
                            "borderRight": 0,
                            "backgroundImage": "",
                            "backgroundColor": "#ffffff",
                            "hasBackground": false,
                            "backgroundRepeat": "no-repeat",
                            "backgroundPosition": "center",
                            "backgroundSize": "cover",
                            "rowSpan": "1",
                            "columnSpan": "1",
                            "gap": 1,
                            "height": 500,
                            "alignItems": "start",
                            "justifyContent": "center"
                        }
                    },
                    "hasOverlay": false,
                    "overlayColor": "repeating-radial-gradient(ellipse at 54.751% 60.204%, rgba(255,255,255,0)  0%,black  100%)"
                },
                {
                    "id": uuidv4(),
                    "elements": [
                        {
                            "name": "image",
                            "image": "/image.png",
                            "id": uuidv4(),
                            "styles": {
                                "320": {
                                    "width": "320",
                                    "height": "320"
                                },
                                "425": {
                                    "width": "300",
                                    "height": "250"
                                },
                                "768": {
                                    "width": "300",
                                    "height": "250"
                                },
                                "1024": {
                                    "width": "434",
                                    "height": "295"
                                },
                                "1440": {
                                    "url": {
                                        "_id": "663b54de5929cc25cdadf484",
                                        "folder": "65e6c37371caa6014a076ad2",
                                        "name": "Asset10@4x.png",
                                        "file_details": {
                                            "fieldname": "files",
                                            "originalname": "Asset10@4x.png",
                                            "encoding": "7bit",
                                            "mimetype": "image/png",
                                            "destination": "public/uploads/images",
                                            "filename": "1715164381975Asset10@4x.png",
                                            "path": "public/uploads/images/1715164381975Asset10@4x.png",
                                            "size": 1068428
                                        },
                                        "path": "/images/1715164381975Asset10@4x.png",
                                        "is_active": true,
                                        "is_deleted": false,
                                        "createdAt": "2024-05-08T10:33:02.304Z",
                                        "updatedAt": "2024-05-08T10:33:02.304Z"
                                    },
                                    "width": "639",
                                    "height": "400"
                                }
                            },
                            "url": {
                                "_id": "663b54de5929cc25cdadf484",
                                "folder": "65e6c37371caa6014a076ad2",
                                "name": "Asset10@4x.png",
                                "file_details": {
                                    "fieldname": "files",
                                    "originalname": "Asset10@4x.png",
                                    "encoding": "7bit",
                                    "mimetype": "image/png",
                                    "destination": "public/uploads/images",
                                    "filename": "1715164381975Asset10@4x.png",
                                    "path": "public/uploads/images/1715164381975Asset10@4x.png",
                                    "size": 1068428
                                },
                                "path": "/images/1715164381975Asset10@4x.png",
                                "is_active": true,
                                "is_deleted": false,
                                "createdAt": "2024-05-08T10:33:02.304Z",
                                "updatedAt": "2024-05-08T10:33:02.304Z"
                            }
                        }
                    ],
                    "styles": {
                        "320": {
                            "flexDirection": "column",
                            "height": 350,
                            "justifyContent": "start",
                            "gridHeightType": "custom",
                            "width": 500
                        },
                        "425": {
                            "flexDirection": "column",
                            "height": 300,
                            "justifyContent": "start"
                        },
                        "768": {
                            "flexDirection": "column",
                            "height": 300,
                            "justifyContent": "center"
                        },
                        "1024": {
                            "flexDirection": "column",
                            "height": 400,
                            "justifyContent": "center"
                        },
                        "1440": {
                            "flexDirection": "column",
                            "display": "flex",
                            "gridOverflow": "overflow-visible",
                            "gridWidth": 500,
                            "gridWidthType": "custom",
                            "contentPlacement": "mx-auto",
                            "gridHeightType": "custom",
                            "radiusTopLeft": 0,
                            "radiusTopRight": 0,
                            "radiusBottomLeft": 0,
                            "radiusBottomRight": 0,
                            "paddingTop": 0,
                            "paddingBottom": 0,
                            "paddingLeft": 0,
                            "paddingRight": 0,
                            "borderTop": 0,
                            "borderBottom": 0,
                            "borderLeft": 0,
                            "borderRight": 0,
                            "backgroundColor": "",
                            "hasBackground": false,
                            "backgroundRepeat": "no-repeat",
                            "backgroundPosition": "center",
                            "backgroundSize": "cover",
                            "rowSpan": "1",
                            "columnSpan": "1",
                            "gap": 1,
                            "height": 500,
                            "alignItems": "start",
                            "justifyContent": "center"
                        }
                    },
                    "hasOverlay": false,
                    "overlayColor": ""
                },
                {
                    "id": uuidv4(),
                    "elements": [
                        {
                            "name": "text",
                            "image": "/text.png",
                            "id": uuidv4(),
                            "styles": {
                                "320": {
                                    "content": "Specifications",
                                    "columnSpan": "1",
                                    "textAlign": "center",
                                    "color": "#ffffff"
                                },
                                "425": {
                                    "content": "Specifications",
                                    "columnSpan": "1",
                                    "textAlign": "center",
                                    "color": "#ffffff"
                                },
                                "768": {
                                    "content": "Specifications",
                                    "columnSpan": "2",
                                    "textAlign": "center",
                                    "color": "#ffffff"
                                },
                                "1024": {
                                    "content": "Specifications",
                                    "columnSpan": "2",
                                    "textAlign": "center",
                                    "color": "#ffffff"
                                },
                                "1440": {
                                    "columnSpan": "2",
                                    "textAlign": "center",
                                    "color": "#ffffff",
                                    "content": "Specifications"
                                }
                            },
                            "content": "Specifications"
                        },
                        {
                            "name": "text",
                            "image": "/text.png",
                            "id": uuidv4(),
                            "styles": {
                                "320": {
                                    "content": "TECHNICAL STUFF, FOR YOU",
                                    "columnSpan": "1",
                                    "textAlign": "center",
                                    "color": "#ffffff",
                                    "fontWeight": "700",
                                    "lineHeightType": "normal",
                                    "lineHeight": "17"
                                },
                                "425": {
                                    "content": "TECHNICAL STUFF, FOR YOU",
                                    "columnSpan": "1",
                                    "textAlign": "center",
                                    "color": "#ffffff",
                                    "fontWeight": "700",
                                    "lineHeightType": "normal",
                                    "lineHeight": "17"
                                },
                                "768": {
                                    "content": "TECHNICAL STUFF, FOR YOU",
                                    "columnSpan": "2",
                                    "textAlign": "center",
                                    "color": "#ffffff",
                                    "fontWeight": "700",
                                    "lineHeightType": "normal",
                                    "lineHeight": "17"
                                },
                                "1024": {
                                    "content": "TECHNICAL STUFF, FOR YOU",
                                    "columnSpan": "2",
                                    "textAlign": "center",
                                    "color": "#ffffff",
                                    "fontWeight": "700",
                                    "lineHeightType": "normal",
                                    "lineHeight": "17"
                                },
                                "1440": {
                                    "columnSpan": "2",
                                    "textAlign": "center",
                                    "color": "#ffffff",
                                    "content": "TECHNICAL STUFF, FOR YOU",
                                    "fontWeight": "700",
                                    "lineHeightType": "normal",
                                    "lineHeight": "17"
                                }
                            },
                            "content": "TECHNICAL STUFF, FOR YOU"
                        },
                        {
                            "name": "text",
                            "image": "/text.png",
                            "id": uuidv4(),
                            "styles": {
                                "320": {
                                    "columnSpan": "2",
                                    "hasBackground": true,
                                    "backgroundColor": "#ffffff",
                                    "fontSize": "0.5"
                                },
                                "425": {
                                    "columnSpan": "2",
                                    "hasBackground": true,
                                    "backgroundColor": "#ffffff",
                                    "fontSize": "0.5"
                                },
                                "768": {
                                    "columnSpan": "2",
                                    "hasBackground": true,
                                    "backgroundColor": "#ffffff",
                                    "fontSize": "0.5"
                                },
                                "1024": {
                                    "columnSpan": "2",
                                    "hasBackground": true,
                                    "backgroundColor": "#ffffff",
                                    "fontSize": "0.5"
                                },
                                "1440": {
                                    "columnSpan": "2",
                                    "hasBackground": true,
                                    "backgroundColor": "#ffffff",
                                    "fontSize": "0.5"
                                }
                            }
                        },
                        {
                            "name": "text",
                            "image": "/text.png",
                            "id": uuidv4(),
                            "styles": {
                                "320": {
                                    "color": "#ffffff",
                                    "fontSize": "11",
                                    "content": "Cooling Capacity:                                             2.6KW"
                                },
                                "425": {
                                    "color": "#ffffff",
                                    "fontSize": "11",
                                    "content": "Cooling Capacity:                                             2.6KW"
                                },
                                "768": {
                                    "content": "Cooling Capacity:                                          2.6KW",
                                    "color": "#ffffff",
                                    "fontSize": "11"
                                },
                                "1024": {
                                    "content": "Cooling Capacity:                                          2.6KW",
                                    "color": "#ffffff",
                                    "fontSize": "14"
                                },
                                "1440": {
                                    "color": "#ffffff",
                                    "content": "Cooling Capacity:                                          2.6KW"
                                }
                            },
                            "content": "Cooling Capacity:                         2.6KW"
                        },
                        {
                            "name": "text",
                            "image": "/text.png",
                            "id": uuidv4(),
                            "styles": {
                                "320": {
                                    "color": "#ffffff",
                                    "fontSize": "11",
                                    "content": "Heating Capacity:                                             3KW"
                                },
                                "425": {
                                    "color": "#ffffff",
                                    "fontSize": "11",
                                    "content": "Heating Capacity:                                             3KW"
                                },
                                "768": {
                                    "content": "Heating Capacity:                                             3KW",
                                    "color": "#ffffff",
                                    "fontSize": "11"
                                },
                                "1024": {
                                    "content": "Heating Capacity:                                             3KW",
                                    "color": "#ffffff",
                                    "fontSize": "14"
                                },
                                "1440": {
                                    "color": "#ffffff",
                                    "content": "Heating Capacity:                                             3KW"
                                }
                            },
                            "content": "Heating Capacity:                         3KW"
                        },
                        {
                            "name": "text",
                            "image": "/text.png",
                            "id": uuidv4(),
                            "styles": {
                                "320": {
                                    "content": "Width:                                                                   810mm",
                                    "color": "#ffffff",
                                    "fontSize": "11"
                                },
                                "425": {
                                    "content": "Width:                                                                   810mm",
                                    "color": "#ffffff",
                                    "fontSize": "11"
                                },
                                "768": {
                                    "content": "Width:                                                               810mm",
                                    "color": "#ffffff",
                                    "fontSize": "11"
                                },
                                "1024": {
                                    "content": "Width:                                                               810mm",
                                    "color": "#ffffff",
                                    "fontSize": "14"
                                },
                                "1440": {
                                    "color": "#ffffff",
                                    "content": "Width:                                                               810mm"
                                }
                            },
                            "content": "Width:                                               810mm"
                        },
                        {
                            "name": "text",
                            "image": "/text.png",
                            "id": uuidv4(),
                            "styles": {
                                "320": {
                                    "color": "#ffffff",
                                    "fontSize": "11",
                                    "content": "Height:                                                                  510mm"
                                },
                                "425": {
                                    "color": "#ffffff",
                                    "fontSize": "11",
                                    "content": "Height:                                                                  510mm"
                                },
                                "768": {
                                    "content": "Height:                                                                  510mm",
                                    "color": "#ffffff",
                                    "fontSize": "11"
                                },
                                "1024": {
                                    "content": "Height:                                                                  510mm",
                                    "color": "#ffffff",
                                    "fontSize": "14"
                                },
                                "1440": {
                                    "color": "#ffffff",
                                    "content": "Height:                                                                  510mm"
                                }
                            },
                            "content": "Height:                                             510mm"
                        },
                        {
                            "name": "text",
                            "image": "/text.png",
                            "id": uuidv4(),
                            "styles": {
                                "320": {
                                    "color": "#ffffff",
                                    "fontSize": "11",
                                    "content": "Depth:                                                                   280mm"
                                },
                                "425": {
                                    "color": "#ffffff",
                                    "fontSize": "11",
                                    "content": "Depth:                                                                   280mm"
                                },
                                "768": {
                                    "content": "Depth:                                                               280mm",
                                    "color": "#ffffff",
                                    "fontSize": "11"
                                },
                                "1024": {
                                    "content": "Depth:                                                               280mm",
                                    "color": "#ffffff",
                                    "fontSize": "14"
                                },
                                "1440": {
                                    "color": "#ffffff",
                                    "content": "Depth:                                                               280mm"
                                }
                            },
                            "content": "Depth:                                               280mm"
                        },
                        {
                            "name": "text",
                            "image": "/text.png",
                            "id": uuidv4(),
                            "styles": {
                                "320": {
                                    "columnSpan": "2",
                                    "hasBackground": true,
                                    "backgroundColor": "#ffffff",
                                    "fontSize": "0.5"
                                },
                                "425": {
                                    "columnSpan": "2",
                                    "hasBackground": true,
                                    "backgroundColor": "#ffffff",
                                    "fontSize": "0.5"
                                },
                                "768": {
                                    "columnSpan": "2",
                                    "hasBackground": true,
                                    "backgroundColor": "#ffffff",
                                    "fontSize": "0.5"
                                },
                                "1024": {
                                    "columnSpan": "2",
                                    "hasBackground": true,
                                    "backgroundColor": "#ffffff",
                                    "fontSize": "0.5"
                                },
                                "1440": {
                                    "columnSpan": "2",
                                    "hasBackground": true,
                                    "backgroundColor": "#ffffff",
                                    "fontSize": "0.5"
                                }
                            }
                        },
                        {
                            "name": "text",
                            "image": "/text.png",
                            "id": uuidv4(),
                            "styles": {
                                "320": {
                                    "content": "All products descriptions, pricing and dimentions are \napproximate, product availability, specifications and \nfeatures are subject to change at any time, and from\ntime to time , and without notice.",
                                    "columnSpan": "1",
                                    "textAlign": "center",
                                    "color": "#ffffff",
                                    "fontSize": "10",
                                    "hasBackground": false,
                                    "backgroundColor": "#842e2e"
                                },
                                "425": {
                                    "content": "All products descriptions, pricing and dimentions are \napproximate, product availability, specifications and features \nare subject to change at any time, and from time to time , \nand without notice.",
                                    "columnSpan": "1",
                                    "textAlign": "center",
                                    "color": "#ffffff",
                                    "fontSize": "11",
                                    "hasBackground": false,
                                    "backgroundColor": "#842e2e"
                                },
                                "768": {
                                    "content": "All products descriptions, pricing and dimentions are approximate, product availability, \nspecifications and features are subject to change at any time, and from time totime , \nand without notice.",
                                    "columnSpan": "2",
                                    "textAlign": "center",
                                    "color": "#ffffff",
                                    "fontSize": "11",
                                    "hasBackground": false,
                                    "backgroundColor": "#842e2e"
                                },
                                "1024": {
                                    "content": "All products descriptions, pricing and dimentions are approximate, product availability, specifications and features are subject to \nchange at any time, and from time totime , and without notice.",
                                    "columnSpan": "2",
                                    "textAlign": "start",
                                    "color": "#ffffff",
                                    "fontSize": "12",
                                    "hasBackground": false,
                                    "backgroundColor": "#842e2e"
                                },
                                "1440": {
                                    "columnSpan": "2",
                                    "textAlign": "start",
                                    "color": "#ffffff",
                                    "content": "All products descriptions, pricing and dimentions are approximate, product availability, specifications and features are subject to change at any time, and from time to\ntime , and without notice.",
                                    "fontSize": "10.5",
                                    "hasBackground": false,
                                    "backgroundColor": "#842e2e"
                                }
                            },
                            "content": "All products descriptions, pricing and dimentions are approximate, product availability, specifications and features are subject to change at any time, and from time to\ntime , and without notice."
                        }
                    ],
                    "hasOverlay": false,
                    "overlayColor": "linear-gradient(90deg, white  0%,black  100%)",
                    "styles": {
                        "320": {
                            "flexDirection": "column",
                            "hasBackground": true,
                            "backgroundColor": "#292929",
                            "paddingLeft": "20",
                            "paddingRight": "20",
                            "gap": 10,
                            "paddingTop": "30",
                            "paddingBottom": "30",
                            "gridHeightType": "fit-content"
                        },
                        "425": {
                            "flexDirection": "column",
                            "hasBackground": true,
                            "backgroundColor": "#292929",
                            "paddingLeft": "20",
                            "paddingRight": "20",
                            "gap": 10,
                            "paddingTop": "30",
                            "paddingBottom": "30",
                            "gridHeightType": "fit-content"
                        },
                        "768": {
                            "gridCols": 2,
                            "flexDirection": "column",
                            "columnSpan": "2",
                            "gridHeightType": "fit-content",
                            "gridWidthType": "max-w-lg",
                            "gap": 10,
                            "display": "grid",
                            "hasBackground": true,
                            "backgroundColor": "#292929",
                            "paddingTop": "40",
                            "paddingBottom": "40"
                        },
                        "1024": {
                            "gridCols": 2,
                            "flexDirection": "column",
                            "columnSpan": "2",
                            "display": "grid",
                            "hasBackground": true,
                            "backgroundColor": "#292929",
                            "gridWidthType": "max-w-3xl",
                            "gridHeightType": "fit-content",
                            "gap": 15,
                            "paddingTop": "40",
                            "paddingBottom": "40"
                        },
                        "1440": {
                            "gridCols": 2,
                            "flexDirection": "column",
                            "columnSpan": "2",
                            "gridWidthType": "max-w-5xl",
                            "gridHeightType": "fit-content",
                            "gap": 20,
                            "display": "grid",
                            "hasBackground": true,
                            "backgroundColor": "#292929",
                            "paddingTop": "40",
                            "paddingBottom": "40"
                        }
                    }
                }
            ],
            "styles": {
                "320": {
                    "name": "1440",
                    "paddingTop": "30",
                    "paddingBottom": "30",
                    "gridLayout": "1",
                    "gap": "5",
                    "gridHeightType": "fit-content",
                    "marginTop": "0",
                    "marginBottom": "0",
                    "contentWidth": "max-w-md"
                },
                "425": {
                    "name": "1440",
                    "paddingTop": "30",
                    "paddingBottom": "30",
                    "gridLayout": "1",
                    "gap": "5",
                    "gridHeightType": "fit-content",
                    "marginTop": "0",
                    "marginBottom": "0",
                    "contentWidth": "max-w-md"
                },
                "768": {
                    "name": "1440",
                    "paddingTop": "30",
                    "paddingBottom": "30",
                    "gridLayout": "2",
                    "gap": "20",
                    "marginTop": "0",
                    "marginBottom": "0",
                    "gridHeightType": "fit-content",
                    "contentWidth": "max-w-2xl"
                },
                "1024": {
                    "name": "1440",
                    "paddingTop": "40",
                    "paddingBottom": "40",
                    "gridLayout": "2",
                    "gap": "20",
                    "marginTop": "0",
                    "marginBottom": "0",
                    "gridHeightType": "fit-content",
                    "contentWidth": "max-w-4xl"
                },
                "1440": {
                    "name": "1440",
                    "paddingTop": "50",
                    "paddingBottom": "50",
                    "gridLayout": "2",
                    "gap": "20",
                    "marginTop": "0",
                    "marginBottom": "0",
                    "gridHeightType": "fit-content"
                }
            },
            "image": "/turbomode.png",
            "gridLayout": "1"
        }
        // {
        //     id: uuidv4(),
        //     name: "defaultStyle1",
        //     type: "defaultStyle",
        //     components: {
        //         title: {
        //             fontsize: "24",
        //             padding: "0",
        //             margin: "0",
        //             align: "center",
        //             text: "Place Your Text",
        //             lineheight: "",
        //             textstyle: "bold",
        //             textweight: "400",
        //             textdecoration: "none",
        //             font: "default",
        //             color: "#000000"
        //         },
        //         description: {
        //             fontsize: "15",
        //             padding: "0",
        //             margin: "0",
        //             align: "center",
        //             text: "Place Your Text",
        //             lineheight: "",
        //             textstyle: "bold",
        //             textweight: "400",
        //             textdecoration: "none",
        //             font: "default",
        //             color: "#000000"
        //         },
        //         paragraph: {
        //             fontsize: "24",
        //             padding: "10",
        //             margin: "10",
        //         },
        //         image: {
        //             margin: "0",
        //             objectfit: "cover",
        //             padding: "0",
        //             height: "200",
        //             width: "200",
        //             marginLeft: "auto",
        //             marginRight: "auto",
        //             marginTop: "auto",
        //             marginBottom: "auto",
        //         },
        //         divHeight: "400",
        //         padding: "0",
        //         paddingLeft: "0",
        //         paddingRight: "0",
        //         paddingTop: "0",
        //         paddingBottom: "0",
        //         margin: "0",
        //         divHeightType: "custom",
        //         grid: "1",
        //         gridCols: "1",
        //         image_placement: "left",
        //         content_placement: "center",
        //         imgHeight: "400",
        //         backgroundImage: "",

        //     },
        //     image: "/defaultstyle1.png",
        // },
        // {
        //     id: uuidv4(),
        //     name: "defaultStyle2",
        //     type: "defaultStyle",
        //     components: {
        //         title: {
        //             fontsize: "24",
        //             padding: "0",
        //             paddingTop: "0",
        //             paddingLeft: "0",
        //             paddingRight: "0",
        //             paddingBottom: "0",
        //             margin: "0",
        //             align: "center",
        //             text: "Place Your Text",
        //             lineheight: "",
        //             textstyle: "bold",
        //             textweight: "400",
        //             textdecoration: "none",
        //             font: "default",
        //             color: "#000000"
        //         },
        //         description: {
        //             fontsize: "15",
        //             padding: "0",
        //             margin: "0",
        //             align: "center",
        //             text: "Place Your Text",
        //             lineheight: "",
        //             textstyle: "bold",
        //             textweight: "400",
        //             textdecoration: "none",
        //             font: "default",
        //             color: "#000000"
        //         },
        //         paragraph: {
        //             fontsize: "24",
        //             padding: "10",
        //             margin: "10",
        //         },
        //         image: {
        //             margin: "0",
        //             objectfit: "cover",
        //             padding: "0",
        //             height: "200",
        //             width: "200",
        //             marginLeft: "auto",
        //             marginRight: "auto",
        //             marginTop: "auto",
        //             marginBottom: "auto",
        //         },
        //         divHeight: "400",
        //         divHeightType: "custom",
        //         grid: "1",
        //         gridCols: "1",
        //         image_placement: "right ",
        //         content_placement: "center",
        //         imgHeight: "400"
        //     },
        //     image: "/defaultstyle2.png",
        // },
        // {
        //     id: uuidv4(),
        //     name: "defaultStyle3",
        //     type: "defaultStyle",
        //     components: {
        //         title: {
        //             fontsize: "24",
        //             padding: "0",
        //             paddingTop: "0",
        //             paddingLeft: "0",
        //             paddingRight: "0",
        //             paddingBottom: "0",
        //             margin: "0",
        //             align: "center",
        //             text: "Place Your Text",
        //             lineheight: "",
        //             textstyle: "bold",
        //             textweight: "400",
        //             textdecoration: "none",
        //             font: "default",
        //             color: "#000000"
        //         },
        //         description: {
        //             fontsize: "15",
        //             padding: "0",
        //             margin: "0",
        //             align: "center",
        //             text: "Place Your Text",
        //             lineheight: "",
        //             textstyle: "bold",
        //             textweight: "400",
        //             textdecoration: "none",
        //             font: "default",
        //             color: "#000000"
        //         },
        //         paragraph: {
        //             fontsize: "24",
        //             padding: "10",
        //             margin: "10",
        //         },
        //         image: {
        //             margin: "0",
        //             objectfit: "cover",
        //             padding: "0",
        //             height: "200",
        //             width: "200",
        //             marginLeft: "auto",
        //             marginRight: "auto",
        //             marginTop: "auto",
        //             marginBottom: "auto",
        //         },
        //         divHeight: "400",
        //         divHeightType: "custom",
        //         grid: "1",
        //         gridCols: "1",
        //         image_placement: "right ",
        //         content_placement: "center",
        //         imgHeight: "400"
        //     },
        //     image: "/defaultstyle4.png",
        // },
        // {
        //     id: uuidv4(),
        //     name: "defaultStyle4",
        //     type: "defaultStyle",
        //     components: {
        //         title: {
        //             fontsize: "24",
        //             padding: "0",
        //             paddingTop: "0",
        //             paddingLeft: "0",
        //             paddingRight: "0",
        //             paddingBottom: "0",
        //             margin: "0",
        //             align: "center",
        //             text: "Place Your Text",
        //             lineheight: "",
        //             textstyle: "bold",
        //             textweight: "400",
        //             textdecoration: "none",
        //             font: "default",
        //             color: "#000000"
        //         },
        //         description: {
        //             fontsize: "15",
        //             padding: "0",
        //             margin: "0",
        //             align: "center",
        //             text: "Place Your Text",
        //             lineheight: "",
        //             textstyle: "bold",
        //             textweight: "400",
        //             textdecoration: "none",
        //             font: "default",
        //             color: "#000000"
        //         },
        //         paragraph: {
        //             fontsize: "24",
        //             padding: "10",
        //             margin: "10",
        //         },
        //         image: {
        //             margin: "0",
        //             objectfit: "cover",
        //             padding: "0",
        //             height: "200",
        //             width: "200",
        //             marginLeft: "auto",
        //             marginRight: "auto",
        //             marginTop: "auto",
        //             marginBottom: "auto",
        //         },
        //         divHeight: "400",
        //         divHeightType: "custom",
        //         grid: "1",
        //         gridCols: "1",
        //         image_placement: "left",
        //         content_placement: "center",
        //         imgHeight: "400"
        //     },
        //     image: "/defaultstyle3.png",
        // },
    ]

    const [tab, setTab] = useState<number>(0);
    const [myStyleList, setMyStyleList] = useState<any>([]);

    const getMyStyles = async () => {
        try {
            let result = await axios.get('page-style/default-style')

            if (result.data.success) {
                setMyStyleList(result.data.data.data)
            }
        }
        catch (ERR) {
            console.log(ERR)
        }
    }

    useEffect(() => {
        getMyStyles()
    }, [])

    const parsedFunc = (obj: any) => {
        if (typeof obj === 'object' && obj !== null) {
            for (const key in obj) {
                if (key === 'id') {
                    obj[key] = uuidv4();
                } else {
                    parsedFunc(obj[key]);
                }
            }
        }

        const ParsedObj = obj

        setSectionsList([...sectionsList, {
            ...ParsedObj,
        }])

        setShowDefaultStyles(false)
    }

    const deleteFolder = async (id: string) => {
        try {
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, Delete it!'
            }).then(async (result) => {
                if (result.isConfirmed) {
                    let result = await axios.delete('page-style/' + id)
                    if (result.data.success) {
                        getMyStyles()
                    }
                }
            })
        } catch (ERR) {
            console.log(ERR)
        }
    }


    return (
        <div className='z-50 flex fixed min-h-screen  w-full border top-0 right-0'>
            <div role='button' onClick={() => {
                setShowDefaultStyles(false)
            }} className='opacity-25 bg-gray-900 w-full min-h-screen '></div>
            <div className='bg-white w-full max-w-sm pb-4 h-screen overflow-auto'>
                <div className='flex w-full bg-white p-3 justify-between gap-5 sticky top-0 z-50 items-center'>
                    <label className='font-semibold'>
                        Styles
                    </label>
                    <button onClick={() => {
                        setShowDefaultStyles(false)
                    }}><XCircle /> </button>
                </div>

                <div className='px-3 flex gap-3'>
                    <button onClick={() => {
                        setTab(0)
                    }} className={`font-semibold ${tab === 0 && "bg-blue-400 text-white shadow"} border rounded-md p-2 text-xs px-4`}>
                        Default Styles
                    </button>
                    <button onClick={() => {
                        setTab(1)
                    }} className={`font-semibold ${tab === 1 && "bg-blue-400 text-white shadow"} border rounded-md p-2 text-xs px-4`}>
                        My Styles
                    </button>
                </div>

                {
                    tab === 0 ?
                        <div className='grid gap-5 mt-4 px-4 '>
                            {
                                defaultStyleList.map((value: any) => (
                                    <div role='button' key={value.id} onClick={() => {
                                        setSectionsList([...sectionsList, {
                                            ...value,
                                        }])
                                        setShowDefaultStyles(false)

                                    }} className='w-full rounded overflow-hidden shadow border border-dashed'>
                                        <img src={value.image} />
                                    </div>
                                ))
                            }
                        </div>
                        :
                        <div className='grid gap-5 mt-4 px-4 '>
                            {
                                myStyleList?.map((value: any) => (
                                    <div role='button' key={value.id} onClick={() => {
                                        parsedFunc(value.theme[0])
                                        // setSectionsList([...sectionsList, {
                                        //     ...value.theme,
                                        // }])
                                        // setShowDefaultStyles(false)

                                    }} className='w-full rounded overflow-hidden shadow border border-dashed relative'>
                                        <img src={`${process.env.NEXT_PUBLIC_IMG_URL}${value?.image}`} className='min-h-[50px]' />
                                        <button onClick={(e) => {
                                            e.stopPropagation()
                                            deleteFolder(value?._id)
                                        }} className='absolute top-2 right-3 z-10 shadow group-hover:block bg-white border p-2 rounded-full'>
                                            <Trash2 size={12} color='#c51515' strokeWidth={"2px"} />
                                        </button>
                                    </div>
                                ))
                            }
                        </div>
                }
            </div>

        </div >
    )
}

export default DefaultStyles