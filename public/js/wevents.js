

$('#QuesAnsEdit').on("click", ".addanswer", function (e) {
    logmessage('QuesAnsEdit Click .addanswer Called');
    //Find selected value after clicking
    var quesNo = (e.target.getAttribute('quesno')) ? e.target.getAttribute('quesno') : e.target.parentElement.getAttribute('quesno');
    var selval = $('input[name="questionType' + quesNo + '"]:checked').val();

    //Based on Answer type add correct Answer to list RADIO or CHECKBOX
    var ansele;
    if (selval === 'R') {
        ansele = $('#d_answer_r').clone().show();
    } else {
        ansele = $('#d_answer_c').clone().show();
    }
    //Find Question Seq Number and add the same to Answer Radio/Select name ex: anschoice-1, 2-choice etc..
    $(ansele).find('input[name="anschoice"]').attr('name', 'anschoice-' + quesNo);

    //Add to answer list
    $('#' + quesNo + '-Answers').append(ansele);


    //Once Answer added to list reindex all values numbers here.
    $('#' + quesNo + '-Answers').find('li').each(function (index, item) {
        //Apply for radio/checkboxes
        $(item).attr('seq', index + 1);
        $(item).find('input').attr('value', index + 1);
        $(item).find('input').attr('seq', index + 1);
        $(item).find('textArea').attr('quesno', quesNo);
        $(item).find('textArea').attr('seq', index + 1);
        //Apply Question seq for delete button
        $(item).find('#deleteanswer').attr('quesno', quesNo);
    });
    //Add Preview Answers here..
    addPreviewAnswers(quesNo, selval)
});


function addPreviewAnswers(quesNo, type) {
    logmessage('addPreviewAnswers Called');
    var tele;
    if (type === GLOBALS.Radio) {
        tele = $('li[name="p_answer_r"]').clone().show();
    } else {
        tele = $('li[name="p_answer_c"]').clone().show();
    }
    tele.attr("name", "");
    tele.attr("id", "anspreview-" + $('#' + quesNo + '-Answers').find('li').length);
    $('#preview-' + quesNo + ' #answerspreview').append(tele)
}


function deletePreviewAnswers(quesNo, seq) {
    $('#preview-' + quesNo + ' #answerspreview').find('li#anspreview-' + seq).remove();
}

$('#QuesAnsEdit').on("click", "#deleteanswer", function (e) {
     logmessage('QuesAnsEdit Click #deleteanswer Called');
    //Delete the selected answer with the closest List item
    //Keep parent reference important before deletes
    var quesNo = (e.target.getAttribute('quesno')) ? e.target.getAttribute('quesno') : e.target.parentElement.getAttribute('quesno');
    var paretnref = $('#' + quesNo + '-Answers');
    $(e.target).closest('li').remove();
    deletePreviewAnswers(quesNo, $($(e.target).closest('li')[0]).attr('seq'));
    //Reindex all values here again

    $(paretnref).find('li').each(function (index, item) {
        $(item).find('input').attr('value', index + 1);
        $(item).find('input').attr('seq', index + 1);
    });

    //After delete reset correct answer 
    if ($(paretnref).find('li').length > 0) {
        var anstype = $('input[name="questionType' + quesNo + '"]:checked').val();
        if (anstype === 'R') {
            var tval = $(paretnref).find(':radio:checked').val();
            if (tval) {
                $('#' + quesNo + '-Question').find('#correctAnswer').find('label').text(tval);
            }
            $('#' + quesNo + '-Question').find('#correctAnswer').find('label').text('');
        } else {
            var anslist = '';
            $(paretnref).find(':checkbox:checked').each(function (index, item) {
                anslist += item.value;
                anslist += ',';
            });
            //var selected = $("input[name='" + ele.name + "']:checked");

            anslist = anslist.substring(0, anslist.length - 1);
            $('#' + quesNo + '-Question').find('#correctAnswer').find('label').text(anslist);

        }

    }

});


function updateAnswers(ele) {
    logmessage('updateAnswers Called');
    if (ele.type === 'radio') {
        $(ele).closest('ul').siblings('#correctAnswer').find('label').text(ele.value);
    }
    else {
        var anslist = '';
        $(ele).closest('ul').find(':checkbox:checked').each(function (index, item) {
            anslist += item.value;
            anslist += ',';
        });
        //var selected = $("input[name='" + ele.name + "']:checked");

        anslist = anslist.substring(0, anslist.length - 1);
        $(ele).closest('ul').siblings('#correctAnswer').find('label').text(anslist);

    }
    logmessage('current Element ' + ele)
}




$('#QuesAnsEdit').on("click", ".previewquestion", function (e) {
    logmessage('#QuesAnsEdit .previewquestion click called');
    var quesNo = (e.target.getAttribute('quesno')) ? e.target.getAttribute('quesno') : e.target.parentElement.getAttribute('quesno');
    $('#preview-' + quesNo + '').toggle('display');
});


$('#QuesAnsEdit').on("keyup", 'textArea[name="question"]', function (e) {
    logmessage('#QuesAnsEdit .textArea[name="question"] keyup called');
    var quesNo = (e.target.getAttribute('quesno'));
    var text = e.target.value;
    text = getFormulaText(text);
    $('#' + quesNo + '-Question').find('#qspreview').html(text);
});

function getFormulaText(text) {
    //var matches = text.match(/\$[^ ]*\$/g);
    //var matches = text.match(/\$(.*?)\$/g);
    var matches = text.match(/\$(?:[^\$\\]|\\.)*\$/g);

    if (matches && matches.length > 0) {
        matches.forEach(function (match) {
            var temp = match.substring(1, match.length - 1); // to remove dollars
            temp = M.sToMathE(temp, true);
            var tempEle = $(document.createElement('div')).html(temp).html();
            text = text.replace(match, tempEle);

        });
    }
    return text;
}
$('#QuesAnsEdit').on("keyup", 'textArea[name="answer"]', function (e) {
    logmessage('#QuesAnsEdit .textArea[name="answer"] keyup called');
    var id = (e.target.getAttribute('quesno'));
    var text = e.target.value;
    text = getFormulaText(text);
    $('#' + id + '-Question').find('li#anspreview-' + e.target.getAttribute('seq') + ' div[id="ansp"]').html(text);
});



