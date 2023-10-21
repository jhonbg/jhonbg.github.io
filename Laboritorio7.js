var textToOperate = document.getElementById('ans')

function result()
{
    var valueText = textToOperate.value
    var number1
    var number2
    var finalscore
    var valid
    valid = validateString(valueText)
    if(valid == true)
    {
        var i=0
        var thereIsDOrM = thereIsDiOrMu(valueText)
        while (thereIsDOrM != false) 
        {
            for(var i = 0; i < valueText.length;i++)
            {
                if(valueText[i] == "*" || valueText[i] == "/")
                {
                    switch(valueText[i])
                    {
                        case "*":
                            var j = i+1
                            var k = i-1
                            var valid1 = false
                            var valid2 = false
                            while(valid1 == false)
                            {
                                if(valueText[j] == "+" || valueText[j] == "/" || valueText[j] == "-" || valueText[j] == "*" || j == valueText.length)
                                {
                                    valid1 = true
                                }
                                j++
                            }
                            while(valid2 == false)
                            {
                                if(valueText[k] == "+" || valueText[k] == "/" || valueText[k] == "-" || valueText[k] == "*" || k == -1)
                                {
                                    valid2 = true
                                }
                                k--
                            }
                            number1 = valueText.slice(i+1,j-1)
                            number2 = valueText.slice(k+2,i)
                            finalscore = parseFloat(number1)*parseFloat(number2)
                            valueText = valueText.substring(0, k+2)+finalscore+valueText.substring(j-1, valueText.length)
                            break;
                        case "/":
                            var j = i+1
                            var k = i-1
                            var valid1 = false
                            var valid2 = false
                            while(valid1 == false)
                            {
                                if(valueText[j] == "+" || valueText[j] == "/" || valueText[j] == "-" || valueText[j] == "*" || j == valueText.length)
                                {
                                    valid1 = true
                                }
                                j++
                            }
                            while(valid2 == false)
                            {
                                if(valueText[k] == "+" || valueText[k] == "/" || valueText[k] == "-" || valueText[k] == "*" || k == -1)
                                {
                                    valid2 = true
                                }
                                k--
                            }
                            number1 = valueText.slice(k+2,i)
                            number2 = valueText.slice(i+1,j-1)
                            finalscore = parseFloat(number1)/parseFloat(number2)
                            valueText = valueText.substring(0, k+2)+finalscore+valueText.substring(j-1, valueText.length)
                            break;        
                    }
                }
                       
            }
            thereIsDOrM = thereIsDiOrMu(valueText)     
        }
        
        var thereIsResult = thereAreNoSy(valueText)

        while (thereIsResult != false) 
        {
            for(var i = 0; i < valueText.length;i++)
            {
                if(valueText[i] == "+" || valueText[i] == "-")
                {
                    switch(valueText[i])
                    {
                        case "+":
                            var j = i+1
                            var k = i-1
                            var valid3 = false
                            var valid4 = false
                            while(valid3 == false)
                            {
                                if(valueText[j] == "+" ||valueText[j] == "-" || j == valueText.length)
                                {
                                    valid3 = true
                                }
                                j++
                            }
                            while(valid4 == false)
                            {
                                if(valueText[k] == "+" || valueText[k] == "-" || k == -1)
                                {
                                    valid4 = true
                                }
                                k--
                            }
                            number1 = valueText.slice(i+1,j-1)
                            number2 = valueText.slice(k+2,i)
                            finalscore = parseFloat(number1)+parseFloat(number2)
                            valueText = valueText.substring(0, k+2)+finalscore+valueText.substring(j-1, valueText.length)
                            break;
                        case "-":
                            var j = i+1
                            var k = i-1
                            var valid1 = false
                            var valid2 = false
                            while(valid1 == false)
                            {
                                if(valueText[j] == "+" || valueText[j] == "-" || j == valueText.length)
                                {
                                    valid1 = true
                                }
                                j++
                            }
                            while(valid2 == false)
                            {
                                if(valueText[k] == "+" || valueText[k] == "-" || k == -1)
                                {
                                    valid2 = true
                                }
                                k--
                            }
                            number1 = valueText.slice(k+2,i)
                            number2 = valueText.slice(i+1,j-1)
                            finalscore = parseFloat(number1)-parseFloat(number2)
                            valueText = valueText.substring(0, k+2)+finalscore+valueText.substring(j-1, valueText.length)
                            break;        
                    }
                    thereIsResult = thereAreNoSy(valueText)
                }       
            }     
        }
        textToOperate.value = valueText 
    }     
}

function thereIsDiOrMu(word)
{
    for (let index = 0; index < word.length; index++) 
    {
        if(word[index] == "*" || word[index] == "/")
        {
            return true
        }   
    }
    return false
}

function thereAreNoSy(word)
{
    for (let index = 0; index < word.length; index++) 
    {
        if(word[index] == "+" || word[index] == "-")
        {
            return true
        }   
    }
    return false
}

function validateString(cadena)
{
    if(cadena[0]=="+" || cadena[0]=="/" || cadena[0] == "-" || cadena[0] == "*")
    {
        textToOperate.value = "primer caracter no puede ser un símbolo "+cadena[0]
        textToOperate.disabled = true
        return false
    }
    
    else if(cadena[cadena.length-1]=="+" || cadena[cadena.length-1]=="/" || cadena[cadena.length-1] == "-" || cadena[cadena.length-1] == "*" )
    {
        textToOperate.value = "El ultimo caracter no puede ser un símbolo"
        textToOperate.disabled = true
        return false
    }

    else
    {
        for(i = 0; i < cadena.length;i++)
        {
            if(cadena[i]=="+" || cadena[i] == "-" || cadena[i] == "*")
            {
                if(cadena[i+1]=="+" || cadena[i+1]=="/" || cadena[i+1] == "-" || cadena[i+1] == "*")
                {
                    textToOperate.value = "los símbolos "+cadena[i]+" y "+cadena[i+1]+" no pueden ir seguidos"
                    textToOperate.disabled = true
                    return false
                }    
            }
            else if(cadena[i]=="/")
            {
                if((cadena[i+1]=="0" && cadena[i+2]=="+") || (cadena[i+1]=="0" && cadena[i+2]=="/") || (cadena[i+1]=="0" && cadena[i+2] == "-") 
                || (cadena[i+1]=="0" && cadena[i+2] == "*") || cadena[cadena.length-1] == "0")
                {
                    textToOperate.value = "la divicion por 0 no esta definida"
                    textToOperate.disabled = true
                    return false
                }
                else if(cadena[i+1]=="+" || cadena[i+1]=="/" || cadena[i+1] == "-" || cadena[i+1] == "*")
                {
                    textToOperate.value = "los símbolos "+cadena[i]+" y "+cadena[i+1]+" no pueden ir seguidos"
                    textToOperate.disabled = true
                    return false
                }
            } 
        }
    }
    return true
}

function verify(fact)
{
    if(textToOperate.disabled == false)
    {
        return textToOperate.value += fact
    }
    return ''
}