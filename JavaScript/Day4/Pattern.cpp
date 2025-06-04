#include <iostream>
using namespace std;
int main(){

    int pos=5;
    for(int row=1; row<=9; row++)
    {
        for(int col=1; col<=5; col++)
        {
            if(col>=1 && col<=pos)
                cout<<"* ";
            
        }
        cout<<endl;
        if(row<5)
            pos--;
        else
            pos++;
    }

    return 0;
}