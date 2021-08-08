import React from 'react';

const genRef=()=>{
    return [1,2,3].map(i=>React.createRef())
}

const cName="xc12 mb-1"

const subCNameMinMax = ["xc1 h-100",
                        "xc3 h-100",
                        "xc8 h-100"]
  
const subCNameInput= subCNameMinMax

let partnerFilter=[
    { 
      templateType:"number",
      lb:"id",
      cName,  
      subCName:subCNameMinMax,
      keyName:"id",
      refInput:genRef(),
      inputType:"number",
      filterCommand:["id"]
    },
    //==============
    //title
    { 
      templateType:"string",
      lb:"คำนำหน้า",
      cName,  
      subCName:subCNameInput,    
      keyName:"title",
      refInput:genRef(),
      inputType:"text",
      filterCommand:["title"]
    },
    //name
    { 
      templateType:"string",
      lb:"ชื่อ",
      cName,  
      subCName:subCNameInput,    
      keyName:"name",
      refInput:genRef(),
      inputType:"text",
      filterCommand:["name"]
    },
    //phone
    { 
      templateType:"arrayString",
      lb:"โทรศัพท์",
      cName,  
      subCName:subCNameInput,      
      keyName:"phone",
      refInput:genRef(),
      inputType:"text",
      filterCommand:["phone"]
    },
    //partnerType
    { 
      templateType:"string",
      lb:"ประเภทคู่ค้า",
      cName,  
      subCName:subCNameInput,    
      keyName:"partnerType",
      refInput:genRef(),
      inputType:"text",
      filterCommand:["partnerType"]
    },
    //remark
    { 
      templateType:"string",
      lb:"หมายเหตุ",
      cName,  
      subCName:subCNameInput,    
      keyName:"remark",
      refInput:genRef(),
      inputType:"text",
      filterCommand:["remark"]
    },
    //address:{number,tambon,district:province,postcode:},
    //address.number
    {       
      templateType:"arrayObjectString",
      lb:"ที่อยู่|เลขที่",
      cName,  
      subCName:subCNameInput,
      keyName:"address_number",
      refInput:genRef(),
      inputType:"text",
      filterCommand:["address","number"]
    },
    { 
      templateType:"arrayObjectString",
      lb:"ที่อยู่|ตำบล",
      cName,  
      subCName:subCNameInput,
      keyName:"address_tambon",
      refInput:genRef(),
      inputType:"text",
      filterCommand:["address","tambon"]
    },
    { 
      templateType:"arrayObjectString",
      lb:"ที่อยู่|อำเภอ",
      cName,  
      subCName:subCNameInput,
      keyName:"address_district",
      refInput:genRef(),
      inputType:"text",
      filterCommand:["address","district"]
    },
    { 
      templateType:"arrayObjectString",
      lb:"ที่อยู่|จังหวัด",
      cName,  
      subCName:subCNameInput,
      keyName:"address_province",
      refInput:genRef(),
      inputType:"text",
      filterCommand:["address","province"]
    },
    { 
      templateType:"arrayObjectString",
      lb:"ที่อยู่|รหัสไปรษณีย์",
      cName,  
      subCName:subCNameInput,
      keyName:"address_postcode",
      refInput:genRef(),
      inputType:"text",
      filterCommand:["address","postcode"]
    },   
]

let productFilter=[
  //id
  { 
    templateType:"number",
    lb:"ไอดี",
    cName,  
    subCName:subCNameMinMax,
    keyName:"id",
    refInput:genRef(),
    inputType:"number",
    filterCommand:["id"]
  },
  //barcode
  { 
    templateType:"string",
    lb:"บาร์โค้ด",
    cName,  
    subCName:subCNameInput,    
    keyName:"barcode",
    refInput:genRef(),
    inputType:"text",
    filterCommand:["barcode"]
  },
  //name
  { 
    templateType:"string",
    lb:"ชื่อ",
    cName,  
    subCName:subCNameInput,    
    keyName:"name",
    refInput:genRef(),
    inputType:"text",
    filterCommand:["name"]
  },
  //groupId
  { 
    templateType:"number",
    lb:"ไอดีกลุ่ม",
    cName,  
    subCName:subCNameMinMax,
    keyName:"groupId",
    refInput:genRef(),
    inputType:"number",
    filterCommand:["groupId"]
  },
  //groupName
  { 
    templateType:"string",
    lb:"ชื่อกลุ่ม",
    cName,  
    subCName:subCNameMinMax,
    keyName:"groupName",
    refInput:genRef(),
    inputType:"text",
    filterCommand:["groupName"]
  },
  //unit
  { 
    templateType:"string",
    lb:"หน่วย",
    cName,  
    subCName:subCNameInput,    
    keyName:"unit",
    refInput:genRef(),
    inputType:"text",
    filterCommand:["unit"]
  },
  //price
  { 
    templateType:"string",
    lb:"ราคา",
    cName,  
    subCName:subCNameInput,    
    keyName:"price",
    refInput:genRef(),
    inputType:"number",
    filterCommand:["price"]
  },
  //=================
  //isRawMat
  { 
    templateType:"boolean",
    lb:"เป็นวัตถุดิบ",
    cName,  
    subCName:subCNameInput,    
    keyName:"isRawMat",
    refInput:genRef(),
    inputType:"checkbox",
    filterCommand:["isRawMat"]
  },
  //stock
  { 
    templateType:"number",
    lb:"ยอดสต็อค",
    cName,  
    subCName:subCNameMinMax,
    keyName:"stock",
    refInput:genRef(),
    inputType:"number",
    filterCommand:["stock"]
  },
  //order 
  { 
    templateType:"number",
    lb:"ยอดจอง",
    cName,  
    subCName:subCNameMinMax,
    keyName:"order",
    refInput:genRef(),
    inputType:"number",
    filterCommand:["order"]
  }, 
  //=================
    //plan
    { 
      templateType:"number",
      lb:"ยอดแผน",
      cName,  
      subCName:subCNameMinMax,
      keyName:"plan",
      refInput:genRef(),
      inputType:"number",
      filterCommand:["plan"]
    }, 
  //remark
    { 
      templateType:"string",
      lb:"หมายเหตุ",
      cName,  
      subCName:subCNameInput,    
      keyName:"remark",
      refInput:genRef(),
      inputType:"text",
      filterCommand:["remark"]
    },

]

let jobFilter=[
  //id
  { 
    templateType:"number",
    lb:"id",
    cName,  
    subCName:subCNameMinMax,
    keyName:"id",
    refInput:genRef(),
    inputType:"number",
    filterCommand:["id"]
  },
  //dateIn
  { 
    templateType:"date",
    lb:"วันสั่งงาน",
    cName,  
    subCName:subCNameMinMax,
    keyName:"dateIn",
    refInput:genRef(),
    inputType:"date",
    filterCommand:["dateIn"]
  },
  //dateOut
  { 
    templateType:"date",
    lb:"วันรับจริง",
    cName,  
    subCName:subCNameMinMax,
    keyName:"dateOut",
    refInput:genRef(),
    inputType:"date",
    filterCommand:["dateOut"]
  },
  //dateTarget
  { 
    templateType:"date",
    lb:"วันนัดรับ",
    cName,  
    subCName:subCNameMinMax,
    keyName:"dateTarget",
    refInput:genRef(),
    inputType:"date",
    filterCommand:["dateTarget"]
  },
  //jobType
  { 
    templateType:"string",
    lb:"ประเภทงาน",
    cName,  
    subCName:subCNameInput,    
    keyName:"jobType",
    refInput:genRef(),
    inputType:"text",
    filterCommand:["jobType"]
  },
  //jobStatus
  { 
    templateType:"string",
    lb:"สถานะงาน",
    cName,  
    subCName:subCNameInput,    
    keyName:"jobStatus",
    refInput:genRef(),
    inputType:"text",
    filterCommand:["jobStatus"]
  },


  //customerId
  { 
    templateType:"number",
    lb:"idลูกค้า",
    cName,  
    subCName:subCNameMinMax,
    keyName:"customerId",
    refInput:genRef(),
    inputType:"number",
    filterCommand:["customerId"]
  },
  //title
  { 
    templateType:"string",
    lb:"คำนำหน้า",
    cName,  
    subCName:subCNameInput,    
    keyName:"title",
    refInput:genRef(),
    inputType:"text",
    filterCommand:["title"]
  },
  //name
  { 
    templateType:"string",
    lb:"ชื่อ",
    cName,  
    subCName:subCNameInput,    
    keyName:"name",
    refInput:genRef(),
    inputType:"text",
    filterCommand:["name"]
  },
  //surname
  { 
    templateType:"string",
    lb:"นามสกุล",
    cName,  
    subCName:subCNameInput,    
    keyName:"surname",
    refInput:genRef(),
    inputType:"text",
    filterCommand:["surname"]
  },
  //phone
  { 
    templateType:"arrayString",
    lb:"โทรศัพท์",
    cName,  
    subCName:subCNameInput,      
    keyName:"phone",
    refInput:genRef(),
    inputType:"text",
    filterCommand:["phone"]
  },
  //remark
  { 
    templateType:"string",
    lb:"หมายเหตุ",
    cName,  
    subCName:subCNameInput,    
    keyName:"remark",
    refInput:genRef(),
    inputType:"text",
    filterCommand:["remark"]
  }
]

let transactionFilter=[
  //id
  { 
    templateType:"number",
    lb:"id",
    cName,  
    subCName:subCNameMinMax,
    keyName:"id",
    refInput:genRef(),
    inputType:"number",
    filterCommand:["id"]
  },
  //date
  { 
    templateType:"date",
    lb:"วันที่",
    cName,  
    subCName:subCNameMinMax,
    keyName:"date",
    refInput:genRef(),
    inputType:"date",
    filterCommand:["date"]
  },
  //groupName
  { 
    templateType:"string",
    lb:"ชื่อเอกสาร",
    cName,  
    subCName:subCNameInput,    
    keyName:"groupName",
    refInput:genRef(),
    inputType:"text",
    filterCommand:["groupName"]
  },
  //groupId
  { 
    templateType:"string",
    lb:"รหัสเอกสาร",
    cName,  
    subCName:subCNameInput,    
    keyName:"groupId",
    refInput:genRef(),
    inputType:"text",
    filterCommand:["groupId"]
  },
  //transactionStatus
  /*
  { 
    templateType:"string",
    lb:"สถานะเอกสาร",
    cName,  
    subCName:subCNameInput,    
    keyName:"transactionStatus",
    refInput:genRef(),
    inputType:"text",
    filterCommand:["transactionStatus"]
  },
  */
  //transactionType
  /*
  { 
    templateType:"string",
    lb:"ประเภทเอกสาร",
    cName,  
    subCName:subCNameInput,    
    keyName:"transactionType",
    refInput:genRef(),
    inputType:"text",
    filterCommand:["transactionType"]
  },
  //effectStock
  { 
    templateType:"string",
    lb:"กระทบสต็อก",
    cName,  
    subCName:subCNameInput,    
    keyName:"effectStock",
    refInput:genRef(),
    inputType:"text",
    filterCommand:["effectStock"]
  },
  //effectOrder
  { 
    templateType:"string",
    lb:"กระทบจอง",
    cName,  
    subCName:subCNameInput,    
    keyName:"effectOrder",
    refInput:genRef(),
    inputType:"text",
    filterCommand:["effectOrder"]
  },
  */
  //partnerId
  { 
    templateType:"number",
    lb:"ไอดีคู่ค้า",
    cName,  
    subCName:subCNameMinMax,
    keyName:"partnerId",
    refInput:genRef(),
    inputType:"number",
    filterCommand:["partnerId"]
  },
  //title
  { 
    templateType:"string",
    lb:"คำนำหน้า",
    cName,  
    subCName:subCNameInput,    
    keyName:"title",
    refInput:genRef(),
    inputType:"text",
    filterCommand:["title"]
  },
  //name
  { 
    templateType:"string",
    lb:"ชื่อ",
    cName,  
    subCName:subCNameInput,    
    keyName:"name",
    refInput:genRef(),
    inputType:"text",
    filterCommand:["name"]
  },
  //phone
  { 
    templateType:"arrayString",
    lb:"โทรศัพท์",
    cName,  
    subCName:subCNameInput,      
    keyName:"phone",
    refInput:genRef(),
    inputType:"text",
    filterCommand:["phone"]
  },
  //address:{number,tambon,district:province,postcode:},
  //address.number
  {       
    templateType:"arrayObjectString",
    lb:"ที่อยู่|เลขที่",
    cName,  
    subCName:subCNameInput,
    keyName:"address_number",
    refInput:genRef(),
    inputType:"text",
    filterCommand:["address","number"]
  },
  { 
    templateType:"arrayObjectString",
    lb:"ที่อยู่|ตำบล",
    cName,  
    subCName:subCNameInput,
    keyName:"address_tambon",
    refInput:genRef(),
    inputType:"text",
    filterCommand:["address","tambon"]
  },
  { 
    templateType:"arrayObjectString",
    lb:"ที่อยู่|อำเภอ",
    cName,  
    subCName:subCNameInput,
    keyName:"address_district",
    refInput:genRef(),
    inputType:"text",
    filterCommand:["address","district"]
  },
  { 
    templateType:"arrayObjectString",
    lb:"ที่อยู่|จังหวัด",
    cName,  
    subCName:subCNameInput,
    keyName:"address_province",
    refInput:genRef(),
    inputType:"text",
    filterCommand:["address","province"]
  },
  { 
    templateType:"arrayObjectString",
    lb:"ที่อยู่|รหัสไปรษณีย์",
    cName,  
    subCName:subCNameInput,
    keyName:"address_postcode",
    refInput:genRef(),
    inputType:"text",
    filterCommand:["address","postcode"]
  },     
  //remark
  { 
    templateType:"string",
    lb:"หมายเหตุ",
    cName,  
    subCName:subCNameInput,    
    keyName:"remark",
    refInput:genRef(),
    inputType:"text",
    filterCommand:["remark"]
  },
  //total
  { 
    templateType:"number",
    lb:"รวม",
    cName,  
    subCName:subCNameMinMax,
    keyName:"total",
    refInput:genRef(),
    inputType:"number",
    filterCommand:["total"]
  },
  //reduction
  { 
    templateType:"number",
    lb:"ส่วนลด",
    cName,  
    subCName:subCNameMinMax,
    keyName:"reduction",
    refInput:genRef(),
    inputType:"number",
    filterCommand:["reduction"]
  },
  //grandTotal
  { 
    templateType:"number",
    lb:"สุทธิ",
    cName,  
    subCName:subCNameMinMax,
    keyName:"grandTotal",
    refInput:genRef(),
    inputType:"number",
    filterCommand:["granTotal"]
  },

  //detail:{id,productId,barcode,name,groupId,groupName,unit,price,quantity,remark,isRawMat},
  //
  {       
    templateType:"arrayObjectString",
    lb:"รายละเอียด|ไอดีสินค้า",
    cName,  
    subCName:subCNameInput,
    keyName:"detail_id",
    refInput:genRef(),
    inputType:"number",
    filterCommand:["detail","id"]
  },
  {       
    templateType:"arrayObjectString",
    lb:"รายละเอียด|บาร์โค้ด",
    cName,  
    subCName:subCNameInput,
    keyName:"detail_barcode",
    refInput:genRef(),
    inputType:"text",
    filterCommand:["detail","barcode"]
  },
  {       
    templateType:"arrayObjectString",
    lb:"รายละเอียด|ชื่อสินค้า",
    cName,  
    subCName:subCNameInput,
    keyName:"detail_name",
    refInput:genRef(),
    inputType:"text",
    filterCommand:["detail","name"]
  },
  {       
    templateType:"arrayObjectString",
    lb:"รายละเอียด|ไอดีกลุ่ม",
    cName,  
    subCName:subCNameInput,
    keyName:"detail_groupId",
    refInput:genRef(),
    inputType:"number",
    filterCommand:["detail","groupId"]
  },
  {       
    templateType:"arrayObjectString",
    lb:"รายละเอียด|ชื่อกลุ่ม",
    cName,  
    subCName:subCNameInput,
    keyName:"detail_groupName",
    refInput:genRef(),
    inputType:"text",
    filterCommand:["detail","groupName"]
  },
  {       
    templateType:"arrayObjectString",
    lb:"รายละเอียด|หน่วย",
    cName,  
    subCName:subCNameInput,
    keyName:"detail_unit",
    refInput:genRef(),
    inputType:"text",
    filterCommand:["detail","unit"]
  },
  {       
    templateType:"arrayObjectString",
    lb:"รายละเอียด|ราคา",
    cName,  
    subCName:subCNameInput,
    keyName:"detail_price",
    refInput:genRef(),
    inputType:"number",
    filterCommand:["detail","price"]
  },
  {       
    templateType:"arrayObjectString",
    lb:"รายละเอียด|จำนวน",
    cName,  
    subCName:subCNameInput,
    keyName:"detail_quantity",
    refInput:genRef(),
    inputType:"number",
    filterCommand:["detail","quantity"]
  },
  {       
    templateType:"arrayObjectString",
    lb:"รายละเอียด|รวม",
    cName,  
    subCName:subCNameInput,
    keyName:"detail_result",
    refInput:genRef(),
    inputType:"number",
    filterCommand:["detail","result"]
  },
  {       
    templateType:"arrayObjectString",
    lb:"รายละเอียด|หมายเหตุ",
    cName,  
    subCName:subCNameInput,
    keyName:"detail_remark",
    refInput:genRef(),
    inputType:"text",
    filterCommand:["detail","remark"]
  },
  {       
    templateType:"arrayObjectBoolean",
    lb:"รายละเอียด|เป็นวัตถุดิบ",
    cName,  
    subCName:subCNameInput,
    keyName:"detail_isRawMat",
    refInput:genRef(),
    inputType:"checkbox",
    filterCommand:["detail","isRawMat"]
  },
  
]

const transactionLogFilter = [
  
  { 
    templateType:"string",
    lb:"สถานะ",
    cName,  
    subCName:subCNameInput,    
    keyName:"status",
    refInput:genRef(),
    inputType:"text",
    filterCommand:["status"]
  },
  ...transactionFilter,
]


const StateTemplate={
    partnerFilter,productFilter,jobFilter,transactionFilter,transactionLogFilter
}
  
export default StateTemplate
  