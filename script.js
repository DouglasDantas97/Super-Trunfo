var carta1 = {
  nome: "Luke Skywalker",
  imagem:
    "https://cdna.artstation.com/p/assets/images/images/033/093/028/large/mizuri-au-lukeskywalker.jpg?1608383437",
  atributos: {
    ataque: 8,
    defesa: 7,
    força: 8
  }
};

var carta2 = {
  nome: "Darth Vader",
  imagem:
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4ead5084-6a51-4fa9-af77-0ab78318db84/dda2rjq-6b690fc7-3e3a-40ec-bbb4-fe401bc554c0.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzRlYWQ1MDg0LTZhNTEtNGZhOS1hZjc3LTBhYjc4MzE4ZGI4NFwvZGRhMnJqcS02YjY5MGZjNy0zZTNhLTQwZWMtYmJiNC1mZTQwMWJjNTU0YzAuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.8ctc8LmieK3iTbCUwRNLaYD6NPOXDdQ8Zq0CyhxUvRw",
  atributos: {
    ataque: 9,
    defesa: 7,
    força: 10
  }
};

var carta3 = {
  nome: "Obi-Wan Kenobi",
  imagem:
    "https://tm.ibxk.com.br/ms/images/highlights/000/054/335/51019.jpg?ims=1200x675",
  atributos: {
    ataque: 7,
    defesa: 9,
    força: 8
  }
};

var carta4 = {
  nome: "Qui-Gon Jinn",
  imagem:
    "data:image/jpeg;base64,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",
  atributos: {
    ataque: 6,
    defesa: 7,
    força: 7
  }
};
var carta5 = {
  nome: "Mestre Yoda",
  imagem:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuSHiVx42FQm9D_95tgtgoSZDyC4BOYCflHQ&usqp=CAU",
  atributos: {
    ataque: 10,
    defesa: 9,
    força: 10
  }
};

var carta6 = {
  nome: "Darth Sidious",
  imagem:
    "data:image/jpeg;base64,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",
  atributos: {
    ataque: 8,
    defesa: 8,
    força: 9
  }
};

var carta7 = {
  nome: "Kylo Ren",
  imagem:
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCA8MDBAPDA8PDw8PDxAPDw8PDxEQDxARJRQnJyUhJCQpLi4zKSwrLSQkJjgmOC8xNTU1KDE7QDs0Py40NTEBDAwMEA8QGBISHTQrISM0NDQ0MTQ0NDE0MTY2NDE0NDQxMTQxNDQ/NDE0MTE0NTE0NDE9NDQ0NDQ0MTQ0NDQ0Mf/AABEIAK0BJAMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAEBQIDAQYHAAj/xABBEAACAAQDBAcFBwMDBAMBAAABAgADERIEISIFMTJBBhNCUVJhcWKBkaHwFCNyscHR4YKSsqLC0gcVU/EzQ/Ik/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QAKREAAwACAQMEAgEFAQAAAAAAAAECAxEhBBIxIkFRYROhkTJxgbHhwf/aAAwDAQACEQMRAD8A3WVJ2ftyTVFVH3sForrl8xGrbZ6DTpNTJHWLxXLxfCNP2RtiZIcPKdlZe0sdR6PdNEnqqYuitw39kt590cXpp6rh/J7us2Fd2J7n4fLRyzFbOZGtdWXxadUKMTJK1CszLd/d50jv22+jmH2il0uiudQmLSh9e+OY9IOj03DTHuS1btNvD7jD9UefHyE3i6hccV7pnPZkuIyCyOGVmVvEvmKH5Q2xWDKsYEWRG02mjhzdK5fgxKRGV73ttW5NPE3d5RFXKVtYrctre0vcYkyRPELK6tOqMy+1uuV7bVauVvlTvi0zjqHIN2oxFiy9RVjZpu1KfhEKRRJ4x6m7OMkRi3TABbKlqz2u+m7Uy6vhWHG25GCWWjYR1ZrVuta6EapcwHia34xsO0Oic3B4NMS8xGV14VXvhMZrk0adMVhbYMw7S0mI09HeVevWojWOycwDyNIocatJPssyi738qwxF0iSbQWVlV9SaTay1IqO/MEZcwRD3D4TqJNUb7111dq3WtFUitOdxoSN4FKGM4GWcQ/2jqxLls7NJw8q/qkrmwQE0Aqa0qN55bmhkraLtNuhuBrKilSCQRnlQ55ZVyhyhmtT5M+83q9y6W7VtK0WgHccvKpMH7NwbulzpctzMranXPI7jy31FakUEMDJtXky3XWtZa1SDU1rmQxFagVFSvKDMOrKpeezKlitc9dWoEVNMxQZZcs8t7YkVzZSMlVVVt035PcykLaB5BSLRzp4ahXMZJVl7oq6uJrGbuqozFRkRXygXam33ekvCKdHC9t01V7qjf6+Vd5NcYToymJUTJ+1tm3txSZuLeVOXyNyb4keiuZNlNSx9Wnw8jlSoNB8AOeUVlLku0sjeGnFnkM2IGfy8hFu39gYeRaZGJwXDqSVjvtDeu4AfH3QmTEPh2oswOvasZ7PmBnl6QBoP+x2sWR+FdS53cwdy0oBWvdQwZIBlLZbbxJqra1KkEXDvryFK0OZjxeXiUM2VZ1i8aWKm+tbcxkABQ5UBNa88ol9Lq8aqzLc24ajpJ3ELSgqKj0IGgcsEc21W1m1fdM2RHcVJO7d8Cd8mOku0u27rLUtKWTCBQ57wO6pG8Vj2ORXq7lWfiZWmpe2VRxKO81Ge7d2mqwdFqjm1Wlsyq2i6qVGVSCfSh3U7oBFVLVDZauHddlT94xLntJa9DbaramQMtpBByII3E8oveQVS90dVbgbs7+/0gcFMrq/7edYBg21MLMw095U9CkyW1rK1rMrd1RvgdGa2lzW3XW9m6m+nfBOJS9y6uWW7U7XNbXvMUYeXewFwW7tN4u7ygRIanDdd7N38xIsuSxiWeqZ1tRtLJ+GvMef7xllSytdfDbbpt76+f6GAZPCuiz0afVpdys9raredPODNqzMLKWdKwyGde0r7PiWZ16pRqdbdxJOVTuBPlCoxLlAAJY/fGYJpGIAJSp1sOMLiyvONbR4YS3tjG4TPRwdU5Z0no50wfCaW1S9Oluz6Rv8AgtsYLaUu1ilWXOW0cBl4m2kMsPj3lMCpK+FoyXdHC5XwdVY8Wd93ivlHSOkfQa658Ju8PNfSOebR2M8hijoVPtRu3R/p06WpiPvF3M3apG74nA4TaskNpa5dLLvECSr+nh/AnlyYdTmW59mj59m4a2Bnlx0zpD0NfDapVzJvqvEsaTi8G6Mbl1QK2np+RXhjJPdD2hHMd3ar6m0r8N0RYf8AL4wU8m1isRaVpu7UdCo868LkHsu4eFbfnE5shkpd2lgydIkNL6yRMZWVZV8mautmJIYoRkQKLvoc+dIDJLQ0zBrRBTawNsMsRtjET5KSprlkXhgG0sv4f9MZQRQEHRbfa8P6iII6LxgsvgVrb27q8hTnn86gmeiqo7WlW8NvePjC6bxCAF5D5m3MQygKyIqratiBaKPPeN3L94F+3z8tZ08Py/YfCKqRi2Fs0UhabWxK0tmvp9o/vHp+IxE9LmeYy9rit9KelPlATQ0+13YXqlQXK0trl4cgBWneQBXzrTfBsfaOOjmEwjpLN+GmYlWb/wDnfETdnYxWrpKTASjnmAaEbo2yUuKk1v8A++BWuZftGBwu15eZ3X1JPupHLkw1zG91RW8Su3IE5KCefyPdB2BLyaLIxWNkq3bw6TLG9wcGnnTluhk9rN02xi3aUVD4n8K7Ew+H1GuVM8xTfl6wA+zWxOBC4m+Xbd1U7aO1ZWElrmMlk0agNPKuWca/MxGJdbf+44llZrfvpmIRffm1PeKecCNsLEM1V+zv7S4vCsvvJbL3wvc0f9PakC4aa8iYCp1K2lsmX5VBB+YPdGxSx1+qUstm0pNtRNVTuIBBI3GtK7wTpqUuGmWKZelnWbKZHXUrUJqAfePWkY2fivs0xGtqtFvVlVr1uIYZinL5QzJodYlzdreZY66GdpqrmK20cMCKn13d+Y2HlWzg1tt2vStl1czwkqQQRkQDu3QzxGHukdZKZrEVJlzXSldRka2lxXUBU03DkcxZEvQXp2rOw272lNCPdXPec4TeidHT5r7NxexXRbLlldniupHHzKuYqillW5m7TWjecuWUNRiHVCq6blZWbxrUGh9CBmIWyaq5tNlysv8ATTMe/dSEnsGLJ2mqqxVW4l8VN1ffGDOexFZgyqrIm65FvLEDuqSTn3+kSxIN3s8MURSJYfgkM1gi0u1cTKvxJNOUMsRJw64aVMUt1jMyzUVu4Cm/dnCnDNpi962jwXNb8oBkQPD/AHR5CF7Ia5WW3Nba7my303x4Uyu7V3CvdHmG7MMzeHs/zABG/wAvzj0Xy2CKBka58Jy8o9AMVS1uYLpW7xNavxg4y3Rij8asytba2703wCBa0Eo0DEnovUxJp7KoW7TxRVWDdlSZE/FpKxb2I3autW6o5xDk3jK0Yw+LKxt3R7pHNwzDq2NunT2WjWek2y5Wz51kib1iNqWA8FibYxrGnyj0cXUql2Vyj6E2P0kw+OAThZlzVt0C7e6IycZV5Nquy+4+cck2XtV8NMR0Opbv6lMbnsPpw8pUSdqULT2rYXdtapb+yfwVNd+B6+martbYM3DTCkxCDCadh7eIHUsd3k4jBbYlkaWy3doRq+3+hzpJKyAJirM6xdI6xVpSle7yhaqVtcor805H2WtV9+Dkzy4qaXDzFYAymK29rtcUBNJi5yJmeXpGijEYCZISTMdRZiEvlsrBtINDWmYIPI03xixGQW1V7mubs+VPn8ouZIisrVp4Y1VHFWNyUdWzaG7XD7UA4yVaoW0XLquXwn9v1MNMTLNly9nVAoS6l+rxeK2GjLwALqjzRbiMK8ic8t9LLb3cJAZTlyIIPvihzAbT42QgiS2l0Khrlu1cS0zJB5ZVigCLpUxka9aabuJblzBBr7jANILwGI6piFlqz2sq3oGsrkWoeYNTF8tyswez7Z/IAZ++AZDa0061Zrm7TVoKe6hz84OVdcKvBpjXqQR1BVw8xFZH4rnLrd7xke6GOFmYOUwebhlmWa+C1cxQqSCLwQTQU7sxzsSWrSQrcMJsUdJVWdmutV1tZWU+I1yPu78+UY477no7+q6aYlUvcHOIlfaB1SMkpZrTFExw8y4g21IAFAaHIUFN53wsmtTSG/C3hUEkAdwqSfhFjMuSsvDpa31+cDubmJjoR5NGzdGdoXzDKcC+dda6rrvpWlQQQDQbq+nezwOFCddL6u91fwo1tEIJJAzFd5Nu4DmaaPJdkcMrcOqN/wBnYxMTLE9iLuDEaZaN1g1VUkcxnvzqQAaQxJbA8ZhVRgy22ta1urTUVpny/Y7oUdVq8P8AlDzGzWR3VmRl6q/R4VoT5ZUKnzB8oEmybld0GlbLvfuI8j+0LRAgxMu5+zpVdK8T7/n/ABAqS9WuqrqXTxXU7j50g/Hm1wyaWW1v6hzECTCWcljqbU34oESy+Wytqe1bVt0r3frEmbdaNPiaJYbrEsmperK1rTFY8RrQV5Ggb1oYuaSzI7qqKkuy5blW2pIAAJqd3KtOcMZQiXIWZ10cKM1rNVwNPxqd2QMYIVfr5/GJvqY2LajMzIt11q1yFedN1YsxGFMiYUmhFZLVZVdZq3UBpcpIPcaHI1HKACnq3PCuQyyp88t8eiX2oyskZkDarQfd+kegAK6Xth12q5wOmWrabfEOYhWvNrtXF+KvpA0ssz6tTQxwz2sT1aTNPCy/tC8CQODFGJ4oJCrd7MCYvjpAgZHrG7TXW/WUGYafppbq8Xs+cLoOwylV1Q2ippoZy53ZYtaqtbFq4i1YBIKta3F/Tzi22a6FlSY6y1VWZVLKi50BIyArWlYyqDqxdQ5H+yNsTJD3I5VuHTHUOjvTGXPATEsEOVrdlvWOJYScq1uW7wt4e4wwkYpkbS0YtVL2jt3j6har+fc7htjo9htoi9aLM8S8/WOe7Z6IT8NnbePEsQ6P9K5uFalbl7Snd/7jpezukGFxigBlDMOFqfCBdt/VEt5+n4Xqn/RxGdhCjWsLYqEuO0bd6LSMat8oKkzxLub1jm+19hz8I9kxCvhbst6GB90Pk0isWdccP4NemqLdV3D/AHeUSw+B6+YSiiSjNoRmLb60UE0qeWZFe+GIwqtRnUKqqvFws2eefocoHxbdm+7SullZUZqCqjdTKhBNPOmV2k3s576XT2xPtjCqqiajXarH1NpbMioIBFN2da9+8KkPFGyzZiMjy2Zm023KncTvrvANCDv5co110sa1o02YOdGKRIRisZBgFwZlDWPxL+cNQuuF0gL1guXS3hbhbcCPQ0NOdKecNHS1uK72rbYmjbEudjgn7v8ACqwg2jNNhVtV0P5TXSLl8P5Rru0huujDD/Uz1OuaeOdfAsdtNvZuu+vrviCx5oyq2x1Hga5MAQy2LtNsHPuWtrrY6q1rMh3gGmR8/UbjC8iImKDWjfdsMk7BGeh6yyXO13MzNKZadpiagmhoAcy3lC/Zy3zDIU6LOK225wAQDkKVNFr5g50hVsPbH2ZjLnh3w0y5ZiKxuzFKqKgV3A94HfQi9Zxwj4qWzK6PaqzEYa0IJVlI5Up6UpkYBUvc9tLDlnHZ0/lAGJk2MdaOzdpWu5A1+fyMNMXM+0re3Hbfd4m3n51hVMS1ez7StCRmxw0yViVmPhETDSsHIw7vh50zrGnTixRnXmeINSuVN0BtIa1H7LXKreKm/wCFRAIbUbgrNaqIy2rbSmdKZ5VFfODymjhb2m7PkN2RyPx8oGCMSZTvpVbuG735R50sYKtrabtDal31By3ilcu8RWDpK/X1lFgmy1l9vrbvZ6ppdDWvOtcxy3wwKp8jUNanSDpmWgVzp57/ANOUYiF6xmABZIOqGEsXQFhkbO0iD5RKwmJBOy8IJuJSVPNiM2pmjZemWydn4LCBZRVpjLpbtRqROqAce7O5udmVeG6DljYJB2Gd2XVwwCYZYRNAtN12rnp8jDYkXNJZaXKVu1L7USk4hpTccxEdbJnVNazSjvHcfQ5VjJDWg3cOniWKsRpWAo9JYZ26l7Pit/SC0ftQHJtZiyravZW663yrzghT2YikaRbkOkTNQg/C410bfCZHgpG1cSt7Wf6xjUJno4OqaOmdHOmDpauJ1J4u0q7q+cbw6YbaEnO2ap+X7RwfDYgo2mNj2PtibhqPKe3xL2feImbqeK5Rpk6WMz78b1X6Ni270TmSmeZhqtLbUyrxrTu7++NAx8hlY3q3a9m1vTdSo3eUdf2H0ok4wBJjCXN8J3N6GKOk3RZccOskWrN7Xhf17j5w3O13R/AsfVVFfi6ha+zh0xDAMyW1vi/yjcNp7EmyGKTEIPtfpCOdhrYmch0ZOmVLunlCIpHrWg+dhoq+z+Fo2VbPPvA0Do9rA+GLWxMxm4rfZWIOrK2rxeGPdXculrvZ7Sw20Sk1wg7C7WaUjy3qVbhZVS9fLPIj5wHi5hmsGz0rb+eeX1lFLo0Slv4oFKXKCslUu2m9LwVWm66jRkrFztFbmK2Q5SI0iBiwViJENEUiIW6CWnM0hFbVY9qfhNTb6Akn+oxGVIZv8vhnEpqiwbtOr2s9+fwy8vidyD8da2Rk4k3b7eG33EftDOaiPLJUam/0sO7yod3pCmWnPxezczeghnhXeVRslW5dLarm/L3Q/JztaK5Enn/+soOmlkR5Svcl9zMrv1TUrQ03Hfkad9N8WYf/AO3StrMvEq6c65VzG7eDuyiEyU9oNhs1Krdi4UrnuyqMvMQt8gCSnKNeqroZdTKHXyBBy5cxFYXTw3Ld9U8oOlzpHUOJvWLM1NKZVDKrdxzBFx550oMoFSYrMLVRtLLa1fPPfvz+QgAzMRdPVnq9C3CaRUvTMjLceUeindlHooATBDfGzYPovjJ+EOKlS7pfF7VsazgOcdH6OdOPsWzjhZqXWqyo3iiaEjRSuqFmPoswhWuVe14oaTnuYt4tUKsRbbW77y9lK29kAUN1e+opTlDQMpUeV0ONmyL7JdURndVudrEViaVYncB3wmQ6obyQWRDd/wAYdCRew6p3ltY9rWsyatx3qe7zgbFhbdMXM2rTT/jA+IOmJKM4JdJg7CJKaYFnmYkvVc0pVd1ahoaEgEVpUVGVc60gHBDTBgENiR5e7+6PIYyRFge5gzBezpXhanM+ZhFJtFkt4ZS3uVEz4bmb4/KpheEL6ZSama1Vu1XHcIqlbVKKFRRdbazW8VR+WX5xnUbO3BncseJibdV3a/WNu6P9NGkAJifvU5N2l/cRy77V53Rfh8Vu1Ri5qHuT0lkxZ57ci2v2fQMjEYPaknKyarDceId/mI07pD0HKtfhKunbXtoO8d/8Rp2yttPhJiPJexl/qVvUecdN2B0vkYykufSVNPfwMfI8j5GGqnJw+H8mFYc/SPvwvc+68/o5Hi8C0piHW1l0/CAnkR3TbvRnD7QW6ipN8arxeo5xzbbnRbEYNtSXKeFk1K37RFTcefHydODqMHULXivh/wDhpMzD3cX1z98AvLKt4v6o2Kbh7eKAJ2Hi5yGebpGuRYZjdrVGKp7UEzMPbA7p7P8AtjVUmcNRS8nls9r+2JE+FG/xitXMZuXtRRKaJG72f6YyiM3DbEC/h4YN2fIM16dn6+UJvSHE91aDNmbNefUICzWs1q+EZn8vlA+LwlrH/KOr/wDTzY4VZk5gMl6tR7v5jQdtylvfTpvb8zHP3Umn7M74mbVwvMpfs1vNeHT/AKmb3fv/ABFuHRGY3zLWt/EzN3V/9RW5t/3fXKMLS0XWr/j7gMz9ZR1y9o8nNGmMcJPtbUGZeFtXZ7x6RdiJW/2f5+vfCqW6q3E3+P5QzkTuyzMysum78q93rA17nOCPLLNy1f2xQwtYslVuW233Zw0xD3y0RV4Gdle5rs6aaVoKEcgN+dcqUSpNzpdRFdrL34FY9/dvGfLfAAD1jR6LJxo5DpqU0Or+I9FAC4B2st7N10EkRDAJK6i9pjdZfb1dnZpxBq035Ui0urNdm34tUJiRhzpH9sKZq6ju0t+vKG8+Xo3aWhIw1WwITPCHOGT7seysJRD6UtqJqDXL2dX/AKMDBGSiwNjOCCzblA2M4YQ2YwLabW4W7VtzL6QVLK+figfBFWQ/7vl74KQQ2CJE3Vbxf0xZKls9bVutVnb2VAqT6AR5bc9N3+m3P6Hvj3a/4xIzwWFuIa5zaq6VsW23mefeYazCqyZpZrWVNK28XfnyMKEGof3RSKT0BX2tBMuZbAL8UWo8Jzs0jI5Y5kYjTSGGHxX90a5LeDUn9peL/KOesez1cHVtHSthdNMRhqLNPXy102s2seh/eOhbN2zhdoLSWylu0jcS+6OB4XFr4Vb4/pDTD7QZWDKSpXUrKxVl9DEK6jh8o1ydJh6j1RxX14OmdJOhqYotNwlEds2Xss3eO4xzjaOx5shnExCjI1rXee71EbtsDpvbSXjdS/8AlUZr+IRuOJw2G2jIzsmK66WWnPuMV2Tfqnh/BjPU5+kax5lufZ/9OAzJMBzZEdF2/wBDZ2Gq0kGaniXiX1EadiMKy8QjNNy9Ud3bizz3Y3s1+ZKt+tUUMsOJ0iAJsiN5s87N07llWGVro2LYuH1W8NzXN+GuQ+P5Qlw5ZdPi4o23YcqxULLdc2pfF5eURkrgvBKn+51Xojh+pwBf/wAlZnyjkXSA639p3b5mOwTG+ybH7iskD4xyHbDK7BG/u7UK1zM/RPS3r8tvw3r+DVJjFGuXiVlZfxDOvnuiGJmvPmPMa253Z3ZVsXM1yHIZ7hEsajSnKPxLpbw+o/OKJs53VA5uWWlieyoqafMx0T4OLO+SS04UVn9rhX69YJw+JsYBqf0tqgEvptravh8X8xYkvtWxocrNhwYWepREZ3fSlulrhmMudRUUyzp3UIjpc1rNb4rrvnENk4t8NOSbKa15bq63alZh398MNo4v7WxmvYrszM1i2q1TX86/ExLWhAGLAmPc5LNaoJ9BT3+sZj1n1qj0AC/CL93d/dp4fWLKrEsExRCt1qzEta3tLUGhz7xGSu6ACDMbaQncaodz8PdJMxWVbLdNwuatdw3kZZ91RCidxUZWV7tXZXyyplDQmQVd3hh3LFq6dXtQpw7orG5bvC0OcIrT2AkI7s3CiqzO3kAN8DBFhfQEsW65mvzvZSBpOdKClRlXM59wu0FZVtZbW/p/SCKWsP7oGx40wIZPAS/u3fTp7Ny3Z8wOcFgLxcVy+emBcDpSrQXJtZu1a3Db4qZe6sJgiQEWBtNLf7vF5fXKIFYkIQA+Oa2WVXtsqfGAuBXf+ld3Lf8AMwRj9UxB7N3z/iB8ebZdreJV/C3M/KkUvAMTM1zExcj7uLT7UDGJo0ULYemrl/asSBtiuU3iP16DfBuGwj4hqShdava0r9fCJaNYp+xBH8PF4ey38wZh8V2WhZNRkaMrNt0tGdQmdmLqHDNjk4iH2xekU7BNWS+ntK2at6j9RGjSpzdk/wBLQbKxLxzvG09ryepPUxlnstbR3bYvSvC40BXYSpvDY7aW9DuP5xnbfRXDY6rqOrmt213E+YjjMrFaRlay+urzOe/lkBG49Hemc3DUSexmyuzcdQ9D+8P8qfptf5Oa+hvG/wAnTU/7CXbnR+fgWImpp7LLwt6GNen4eO/YbE4XamHqLZsthQq28HuI5GNL6QdBWWr4PWnF1bcS+nfCqHPM8ovD10ZPRnWq+fY57szZxas1uBez4m/aNp2JI63FIqi1WmLReK2mdPOKUwbyMM6OttreHVnE9jOysWU0MlLlb2qxn3bLeN86/wAHRulrBNmzB32qPj/Ecd2g908buJV1Utzy90bRtXpFOxOFEmfS4OpV103eojTMSbplez7UbbV13LwcPZWDG4rzvZDbGF62WLR96mm65WuoTllkfI/oY1gxt7ppq2lVW3Sur5xrWKltc8xVa3tablWveeVac43k4XWwaWuqHWzcE+LZwliskt5lrvZcqipA5E05bzCmSvaguWWXtf6Y0IZasu3Nf7fFB2y5+HeXiJU+6+3rMO69lwc1bvB3eRp3EQvaYV4vw3dn0I+t8U4Wav2tLrrW0t2m/n9RA/BIawcni8vhlHojjCOtawhlrkwXJvPPOPRIbBpXCIsZjl2reH2YxKlFdLabV7Xa8vWJzAuVhZtOq5eFq7vPLOvnABXiW+78V0JjDjE//GYTxSJZbIVbx+KNowuKlpIeW0pL2uZJyr96rZZVruyPnnGs4RLnEPEVWbUbViaGi7A4ZZ8yxpkuStrNfNa1cgTaDQ5mlB5mF+KbcsEpxRXj5F0warVfUrOw4e80rSBAyUhLEF3C2qDsGUmoBlIVJbf+R1eaBv50L0Ay0gjlAsnTLAbUtsWYOSWkGYupUe11te5FO4nKgBOW/f6iBjROu7i9q763RNqNS1bfFquW6p3c91N/dFdIvRLvwqt7btOVaVOQOXPKEMEmj7y+3hVV0+/Kh374RbQnXubdKrp4uLM5wxxWItR3u7TW3NdqqRT+R3HdCSY11Pw6j4m7/rui9E7K2iQEeKaa6eK227Vu307vOJqVtN2puELnp3avPmKQyS6S3s/1fX6wzw7lULqWVVtVrWW7Pd6A05fCFappugiQ/wBft3/KE0XNaYelzcNq/XM/tSKMRh7YLw9GXtX3aWy4TypuHuhqmzEeW5Z7WVdMZN6Z2zKuTUzpiazjFmJl2tAsXwzB1UPSYxlYp4OkYo98Wph8O2DqpVWtuhVKD9kN9esZXCZ6GHPc65Nt2XtmbhHrJcr/AKbqbqiOh9HenCTqS8Zpf/yLw+8cvWOPYgtIli7jmcPsqN5+f5xbgMc3WBuH8MYqanlM6czw5/Tc+r5XlH0BtDZmHx0s7ta5OlPcfOOebZ2PO2azHiVlZbl4WUfkacv0irBdMWwnVCWTarLevZZef0IZ9MOlUrEyESQpYsyt7XugpzUt60/9mXT4s+DJK8y/0aBtLaLJOt7Nuq6BkxrXB0W25WXUqsrKd+/mD+kZ2tNlu6PbxKqt7S/X1nAmG2jZSXaGS65W7S13+o/aLxrU+Ces1dNbXnyNJmIRVo68Xa91IVJMmo79QzKrqyN4XQ5FSOYIJ3wftJVkS5M2geXMXrJWq5cja6nuIOR9R3wvwoM1qJws2m5tXln8o2n5PM7PVp+xCXICrwx4sbSqamVrvC13f+mUenBk/wDkV5bXWqzrpZu67dWK2DeK114W/TyPyPzi0TT5KJmJuW1uHhb2fr9+VIng5Fzg2srJdc3Z/F8P3gaeWmzOHW3Fb+cP8MOokymRWSZq19h15b+YzB8qQU9EA0xVrvEegaaDccmj0IDKHsrDmXt+amF+zdVhmTq3k3tJDTLSak1JyI5EboUObmqq2XNcqr2fIRJ3d218Sqq8Kruyzpz898AEMUv3JzhO6rlaVbTd2tPs/XfDjGL9yfahP1bd0NEsKwU9JXGt10HHGDKxDAuz7lb8S28Ktp9/5w1RbYTGitRMahZdLf6oGmpq03eJoPtgN1VXOo3Lw+Ft2R8oEDCwtsvTXtaW7P8AMRwD2yytX1Layq9t2Y4u8eXp3Rc5dUKsrJdqtttXdUU9x+BiOCl3rai6rWbUyrdTM0rQVpuG88s4Qy2Vc76bbuLTpVaCpPoAKk+RMS2nilWSXZ3aZOZle5irOxzLmozFT3VIFKjfE7UlIV+7Z20W3m5mKAFTWopUnVuBHMUEJdrTlutVnd//ALndka6bU8JG8Up8OcUloGwHHzSyoGZmbj+O6ADF+JOrTw9n8PKKDFEnhFkpLmAY2r4mrp+EZlKM7nVaKzaq6mHZ9T55QRhQubLqa3TbxK3fTmIBF7yuqcpcj29pGuRsuRigixqeLhg4pI6gMrzFxN+pGt6ppfiB5HcKesVS5auwR26tWa29qsq+ZA3jygAcdHsIk9yXcWJpu4fl9e+DtqCXKmFJDltOrwxqkucZTFVY8TLp07jvp+kXycQbq3amiKnZ0YsrngKbC3VNdXFq9YqbCFWuUD+3Taf0gya+q1tPD/bT8t8FXixPxM39MZ7aOtTFidcI/DUwXg06qmm6DpZGs+H94grqtITbZpOOJ52Rx8kYhkdl7FqqrG3Jzv8APP5iIy5Kpwrb/Bjz4jevZVrW/Cdx/L4iKHxBbTE6p8Gnfjl79w1hy7UbXtGSUw0lXUMyybma21vONf6P4U4ufKVtRZ1X4f8AqOj9LtglMJ1spq9WlrKcmt8j5RlUtp69jonOlUquN+DjoW7J5irczKrNw8zn3ZwvBtbVxQ0x0jxdmFLmOjG00cPVTU1phSTS6iVeVRmu9lWORNPT40EMsdi5ciXKlSONONv2I313+Ua+oiTv/wAo07TidvRvmz9tYXGSHw+JSX94try30K7DcUbsPl+EkClM1Gr7UwyyGTqr2kOrdU7+W9Se8d3Ig8sgovgzDu86W8vJrdVjeIdpfMD4io7ooyb2G7LVOpczUuZmVpT+mRHpTP1gh5pWiMTarNavZz3/ABivDLbLCqbe1/Uecedg9V7NravZ31z5xDe2PRt+B/6cYrFSVmrNQBxWmqMxreH6R4/CoJUjE/drw749DELKaRasSCXNqjAOmLJe4jvtgAjiUXqTcxuuW1fFnnnHsT0axUrBjGKC0u27xWrENoj7v+qIN0jxQwQwt9ZTrwns+kNeBMowVrMG4YcrKRkr1mu+2xlOlfFdu35U3wiwHEIeV0j5+cKvI0X9RLSt0xXa50+6q1tCKNU0qCC1KZ1GdK1hRiV1wyloGrXkpb+IX4saoSBjb/uM9cA+DqvUM6zmW0XXgbwd43RVsyXKdLLpiuzKqcCraTQ1JGR+QofKLsPOVXV1QGwSntm0mIzVFaigqCeXdl5xZNBlyiQR95R3W0BCTQmg5DMgDkKAbhDS2DBcQoROtajLayIjdW2qhOWZquRaprmCCMiTrGINzf3Q+23imC2qFVKrLZQo1eZPfUfpyjXm4Ysklik8w1um5dSt5g8/rzit2bq1W8MrMzWdpW7zlz5ZxNBcDXv/AFgftf0wATIW4W3KLVuuZW1cyKAUHcPnGSLc17MF4zBdSbS12S520OaV7+W6Bl3U8/0gEWfaXXio6tq+Pp+UWyXWawVKgsyqobxHcK7vmIDJ3Rcxyp4jU92W6o57/qsABe1sJPkMGxEspcq9nS1ABX1pSv8AMBq8WzVmFJZeazhhMtVixC0PrnWBYADZc9rhn4uLswQMUbR7P7QtiQOqFpFLI14GSYrUf9URbFfX13QvRz+cSMLtQ/yUEmczf4wTKN7DTAEkaXbmpWn5Q72dLAcQq4Rvg9Vcm99Adn24uS0wZNcy/iAjcOnuIswiSt3WNn7oA6LSx1uG8l/2xR/1BxjdcsvK1UvHrHGqfY/tnoKe7qcf0tnMNoSHZjat34YVHCtdqW26NimH9fzhZjOIe0MvZ9I3xmHV23T2LcXhgiIyI3tMupff3QDGxLqlgHmCPnCGcNUbJnBTKoIl/dUmNqW7h7UQVLVLA0IMFPgcla7ibMW5fnDEHmdLd7kDdW2pfGq91Ihi3CqFRlZWVXutZWVqUK1PurSoMVpppT6yiua5Usu8VIPnnEDKWcV3xiLKU9+ceiyT/9k=",
  atributos: {
    ataque: 9,
    defesa: 7,
    força: 8
  }
};

var cartas = [carta1, carta2, carta3, carta4, carta5, carta6, carta7];
var cartaMaquina;
var cartaJogador;

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 7);
  cartaMaquina = cartas[numeroCartaMaquina];
  console.log(cartaMaquina);

  var numeroCartaJogador = parseInt(Math.random() * 7);
  while (numeroCartaMaquina == numeroCartaJogador) {
    numeroCartaJogador = parseInt(Math.random() * 7);
  }
  cartaJogador = cartas[numeroCartaJogador];
  console.log(cartaJogador);

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
  exibirCartaJogador();
}

function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");

  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();
  var divResultado = document.getElementById("resultado");

  if (
    cartaJogador.atributos[atributoSelecionado] >
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado = "<p class='resultado-final'>Venceu</p>";
  } else if (
    cartaJogador.atributos[atributoSelecionado] <
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado = "<p class='resultado-final'>Perdeu</p>";
  } else {
    htmlResultado = "<p class='resultado-final'>Empatou</p>";
  }
  divResultado.innerHTML = htmlResultado;

  document.getElementById("btnJogar").disabled = true;
  exibirCartaMaquina();
}

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
  // divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")"
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaJogador.atributos[atributo] +
      "<br>";
  }
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;

  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  // divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")"
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto +=
      "<p type='text' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaMaquina.atributos[atributo] +
      "</p>";
  }
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;

  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}