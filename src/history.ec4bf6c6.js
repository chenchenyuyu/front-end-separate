function afterTran(){$("#starttime").datepicker({minDate:"-7d",maxDate:new Date,onClose:function(a){$("#endtime").datepicker("option","minDate",a)}}),$("#starttime").datepicker("setDate",new Date),$("#endtime").datepicker({minDate:"-7d",maxDate:new Date,onClose:function(a){$("#starttime").datepicker("option","maxDate",a)}}),$("#endtime").datepicker("setDate",new Date),$("body").on("click",".bet-count",function(){$("#productid").val($(this).attr("data-productid")),$("#btn-submit").click()}),$("#history-form").validate($.extend({},validBase,{})),$("#btn-history").click(function(){$.get("/transaction/listRecords",{startDate:$("#starttime").val()+$("#hmstarttime").val(),endDate:$("#endtime").val()+$("#hmendtime").val()},function(){var a=doT.template($("#template").html())({});$("#SearchResult").html(a)})})}