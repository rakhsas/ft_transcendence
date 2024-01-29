#include <iostream>
#include <vector>


int main()
{
    std::string s1;
    std::string s2;
    std::cin >> s1;
    std::cin >> s2;
    int c1 = 0;
    int c2 = 0;
    unsigned int l = 0;
    std::sort(s1.begin(), s1.end());
    std::sort(s2.begin(), s2.end());
    std::cout << s1 << std::endl;
    std::cout << s2 << std::endl;
    while (l < s1.length())
    {
        if ((s1[l] >=  'a' && s1[l] <= 'z') || (s1[l] >=  'A' && s1[l] <= 'Z'))
        {
            if (s1[l] >=  'a' && s1[l] <= 'z')
            {
                c1 += (s1[l] - 97);
            }
            else if (s1[l] >=  'a' && s1[l] <= 'z')
            {
                c1 += (s1[l] - 64);
            }
        }
        if ((s2[l] >=  'a' && s2[l] <= 'z') || (s2[l] >=  'A' && s2[l] <= 'Z'))
        {
            if (s2[l] >=  'a' && s2[l] <= 'z')
            {
                c2 += (s2[l] - 97);
            }
            else if (s2[l] >=  'A' && s2[l] <= 'Z')
            {
                c2 += (s2[l] - 64);
            }
        }
        l++;
    }
    std::cout << c1 << c2 << std::endl;
    int diff = c1 - c2;
    if (diff > 0)
        std::cout << 1 << std::endl;
    else if (diff < 0)
        std::cout << -1 << std::endl;
    else  
        std::cout << 0 << std::endl;
    return (0);
}