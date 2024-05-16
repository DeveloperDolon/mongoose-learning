#include <iostream>
#include <vector>
#include <string>
using namespace std;

// Base class for Marks
class Marks {
public:
    string name;
    int rollNumber;
    float marks;
    
    Marks(string n, int roll, float m) : name(n), rollNumber(roll), marks(m) {}
};

// Derived class for Physics
class Physics : public Marks {
public:
    Physics(string n, int roll, float m) : Marks(n, roll, m) {}
};

// Derived class for Chemistry
class Chemistry : public Marks {
public:
    Chemistry(string n, int roll, float m) : Marks(n, roll, m) {}
};

// Derived class for Mathematics
class Mathematics : public Marks {
public:
    Mathematics(string n, int roll, float m) : Marks(n, roll, m) {}
};

// Function to calculate the average marks of the class
float calculateAverage(vector<int> totalMarks) {
    int sum = 0;
    for(int marks : totalMarks) {
        sum += marks;
    }
    return static_cast<float>(sum) / totalMarks.size();
}

int main() {
    int numberOfStudents;
    cout << "Enter the number of students: ";
    cin >> numberOfStudents;

    vector<Physics> physicsMarks;
    vector<Chemistry> chemistryMarks;
    vector<Mathematics> mathematicsMarks;
    vector<int> totalMarks;

    string name;
    float pMarks, cMarks, mMarks;
    
    for (int i = 0; i < numberOfStudents; ++i) {
        cout << "Enter name of student " << i+1 << ": ";
        cin >> name;
        
        cout << "Enter marks in Physics: ";
        cin >> pMarks;
        Physics p(name, i+1, pMarks);
        physicsMarks.push_back(p);
        
        cout << "Enter marks in Chemistry: ";
        cin >> cMarks;
        Chemistry c(name, i+1, cMarks);
        chemistryMarks.push_back(c);
        
        cout << "Enter marks in Mathematics: ";
        cin >> mMarks;
        Mathematics m(name, i+1, mMarks);
        mathematicsMarks.push_back(m);
        
        int total = pMarks + cMarks + mMarks;
        totalMarks.push_back(total);
        
        cout << "Total marks for " << name << " (Roll No. " << i+1 << "): " << total << endl;
    }

    float averageMarks = calculateAverage(totalMarks);
    cout << "Average marks of the class: " << averageMarks << endl;

    return 0;
}