#include <iostream>
#include <vector>
#include <numeric>

int main()
{
    int l;
    std::cin >> l;
    std::vector<std::string> result;
    int j = 0;
    while(j < l)
    {
        std::string x;
        std::cin >> x;
        result.push_back(x);
        j++;
    }
    unsigned int Size = 0;
    while (Size < result.size())
    {
        if (result[Size] ==  "abc" || result[Size] ==  "acb"
            || result[Size] ==  "bac" || result[Size] ==  "cba")
                std::cout << "YES" << std::endl;
        else
            std::cout << "NO" << std::endl;
        Size++;
    }
    return (0);
}